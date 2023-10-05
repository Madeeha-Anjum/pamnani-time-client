import React from "react";
import LeapFrogLoader from "@/components/LeapFrogLoader";
import classnames from "classnames";

export enum Type {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export enum Kind {
  SOLID = "solid",
  OUTLINE = "outline",
}

export enum Size {
  FULL = "full",
  SMALL = "small",
}

type Neverize<T> = { [P in keyof T]: never };

// type MutuallyExclusive<T, E> = (T & Neverize<E>) | (E & Neverize<T>);

type Buttonable = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: `${Type}`;
};

type Linkable = {
  href?: string;
};

// type Clickable =
//   | (Linkable & Neverize<Buttonable>)
//   | (Buttonable & Neverize<Linkable>);

// const isLinkable = (value: Buttonable | Linkable): value is Linkable => {
//   return "href" in value;
// };

type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  kind?: `${Kind}`;
  size?: `${Size}`;
};
// } & MutuallyExclusive<Buttonable, Linkable>;

// interface ButtonAndLinkInterface {
//   size?: "sm" | "md" | "lg";
//   color?: "primary" | "secondary" | "danger";
//   children?: React.ReactNode;
//   className?: string;
// }
// interface ButtonInterface extends ButtonAndLinkInterface {
//   type?: "button" | "submit" | "reset";
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }
// interface LinkInterface extends ButtonAndLinkInterface {
//   href: string;
// }

// type ButtonProps =
//   | (ButtonInterface & { href?: never })
//   | (LinkInterface & { onClick?: never; type?: never });

interface IClickable {
  children: React.ReactNode;
  isLoading?: boolean;
  kind?: `${Kind}`;
  size?: `${Size}`;
}

interface IButton extends IClickable {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: `${Type}`;

  // ILink keys
  href?: never;
}

interface ILink extends IClickable {
  href?: string;

  // IButton keys
  onClick?: never;
  type?: never;
}

const isLinkable = (value: IButton | ILink): value is ILink => {
  return "href" in value;
};

const validateProps = (props: IButton | ILink) => {
  if (isLinkable(props)) {
    if (props.type) {
      throw new Error(
        "Buttons with href are Link buttons and cannot have a type"
      );
    }
    if (props.onClick) {
      throw new Error(
        "Buttons with href are Link buttons cannot have an onClick"
      );
    }
  } else {
    if (!props.type) {
      throw new Error("Button buttons (without href) must have a type");
    }
  }
};

const fillInDefaultProps = (props: IButton | ILink) => {
  if (isLinkable(props)) {
    return {
      isLoading: false,
      kind: Kind.SOLID,
      size: Size.FULL,
      ...props,
    };
  } else {
    return {
      isLoading: false,
      kind: Kind.SOLID,
      size: Size.FULL,
      type: Type.BUTTON,
      ...props,
    };
  }
};

const Button: React.FC<IButton | ILink> = (_props) => {
  const props = fillInDefaultProps(_props);
  validateProps(props);

  const className = classnames(
    "block py-3 text-center rounded-lg px-4 transition ring-primary active:scale-95 shadow-0 shadow-primary",
    "hover:ring hover:ring-offset-2 hover:shadow-lg hover:shadow-primary",
    "focus:ring focus:ring-offset-2 focus:shadow-lg focus:shadow-primary",
    {
      "w-full font-semibold": props.size === Size.FULL,
    },
    {
      "bg-black text-white": props.kind === Kind.SOLID,
      "bg-white border-2 border-black text-black": props.kind === Kind.OUTLINE,
    }
  );

  if (isLinkable(props)) {
    return (
      <>
        <a className={className} href={props.href}>
          <span className="flex item-center justify-center">
            {props.isLoading && <LeapFrogLoader />}
            {props.children}
          </span>
        </a>
      </>
    );
  } else {
    return (
      <>
        <button className={className} type={props.type} onClick={props.onClick}>
          <span className="flex item-center justify-center">
            {props.isLoading && <LeapFrogLoader />}
            {props.children}
          </span>
        </button>
      </>
    );
  }
};

export default Button;
