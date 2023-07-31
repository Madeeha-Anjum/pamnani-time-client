import React from 'react'

interface LogoInterface {
  className?: string
}

const Logo: React.FC<LogoInterface> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 50 46'
      fill='currentColor'
      {...props}
    >
      <path
        d='M20.6599 0.0664406C16.6505 0.390129 13.3937 1.8364 11.0537 4.34326C10.5063 4.92176 9.64425 6.09944 9.64425 6.26472C9.64425 6.29916 9.80162 6.20963 9.98635 6.05812C11.7105 4.68761 14.0984 3.97136 16.5889 4.07467C17.841 4.12976 19.4967 4.43967 19.4967 4.61185C19.4967 4.64628 19.2915 4.67383 19.0383 4.67383C18.1694 4.67383 16.0278 5.08017 15.1657 5.40385C15.0084 5.46584 14.5773 5.63801 14.2147 5.78952C11.17 7.04984 8.90531 9.59114 8.16638 12.5663C8.1527 12.6214 8.05007 12.6283 7.78323 12.5801C7.24271 12.4768 5.87431 12.5525 5.24485 12.7247C3.37698 13.2206 1.89911 14.4878 0.934391 16.4161C-0.228748 18.7577 -0.310852 21.6434 0.715447 24.0951C1.29017 25.4794 2.37121 26.8224 3.5754 27.6626C4.13644 28.0483 5.17643 28.5717 5.39537 28.5717C5.60063 28.5717 5.57326 28.7163 5.30643 29.0606C4.77275 29.7631 3.76013 31.4986 3.76013 31.7052C3.76013 31.7259 3.89013 31.657 4.05434 31.5468C5.0738 30.8375 6.59956 30.3623 7.84481 30.3623H8.42638L8.13217 30.6929C7.74218 31.1336 7.33166 32.0289 7.17429 32.8003C6.9485 33.8953 7.02377 35.4036 7.35902 36.4917L7.48218 36.8705L7.56428 36.1887C7.67376 35.3691 7.79691 34.9766 8.1527 34.281C8.39901 33.792 9.09689 32.9105 9.23373 32.9105C9.26794 32.9105 9.25426 33.0138 9.19952 33.1377C8.90531 33.8402 8.79584 35.6446 8.98742 36.6432C9.43899 38.9986 11.2111 41.3677 13.3047 42.4145C13.9615 42.7382 14.201 42.752 13.7426 42.4352C13.3663 42.1735 12.86 41.6294 12.5863 41.1955C11.8405 40.0178 11.82 38.2961 12.5316 36.781L12.7437 36.3195L12.8326 37.1735C13.0447 39.1776 13.7358 40.5619 15.241 42.0151C16.322 43.0619 17.8341 43.9365 19.5036 44.4875C20.8378 44.9214 22.8425 45.2864 22.4114 45.0109C20.6667 43.9021 19.9483 43.1652 19.4762 41.9806C19.2983 41.533 19.1204 40.7065 19.182 40.6377C19.2025 40.6239 19.3394 40.6859 19.483 40.7823C20.2836 41.3126 21.4877 41.8085 22.6098 42.0702C25.2303 42.6762 28.275 42.201 30.2181 40.8856C30.3755 40.7823 30.5192 40.6928 30.5397 40.6928C30.6971 40.6928 30.4029 41.7396 30.0608 42.4145C29.5613 43.3787 28.8839 44.0949 27.8576 44.7285C27.2213 45.128 27.2624 45.0935 27.3103 45.1418C27.3719 45.1968 28.3161 45.0453 29.1097 44.8525C32.777 43.9572 35.4112 42.0839 36.5743 39.5564C36.9233 38.792 37.0875 38.0895 37.1285 37.1597C37.1491 36.719 37.1901 36.354 37.2175 36.354C37.2928 36.354 37.6759 37.2493 37.8059 37.7314C37.888 38.0344 37.9291 38.4545 37.9291 39.0399C37.9359 39.763 37.9085 39.9765 37.7785 40.3691C37.5049 41.1886 36.9164 41.9737 36.157 42.5316C35.7944 42.8002 36.1433 42.7106 36.7728 42.3801C38.2917 41.5812 39.5917 40.1831 40.4332 38.4545C41.2543 36.781 41.4322 35.1832 40.9874 33.4614C40.919 33.1791 40.8711 32.9311 40.8916 32.9105C40.9464 32.8554 41.5211 33.551 41.8085 34.0262C42.1916 34.6598 42.4174 35.4173 42.4653 36.1956C42.4858 36.5468 42.5269 36.836 42.5542 36.836C42.6227 36.836 42.8827 35.8305 42.9716 35.2107C43.0606 34.5633 43.0058 33.1859 42.869 32.635C42.65 31.7879 42.3558 31.1612 41.9316 30.6791L41.6374 30.3416L42.4516 30.3829C43.7105 30.4449 44.9011 30.8237 45.8589 31.4642C46.071 31.6088 46.2489 31.6984 46.2489 31.657C46.2489 31.5055 45.4621 30.0524 45.0174 29.3843L44.5384 28.675L44.7642 28.5786C45.9889 28.0276 46.6252 27.6282 47.3436 26.9463C49.1499 25.2315 50.101 22.7866 49.9915 20.1351C49.9025 18.1035 49.2731 16.3197 48.1099 14.8666C47.1931 13.7096 46.1052 13.0209 44.6068 12.6421C43.7584 12.4355 42.4106 12.4492 41.5827 12.6834C41.2543 12.7729 40.9669 12.8349 40.9464 12.8142C40.9258 12.7936 40.9122 12.6765 40.9122 12.5457C40.9122 12.4217 40.8369 11.9671 40.748 11.5402C40.2074 9.03329 38.9759 6.74681 37.2585 5.0595C35.5959 3.43417 33.7075 2.3116 31.1555 1.43695C27.9124 0.328144 23.9303 -0.195267 20.6599 0.0664406ZM26.8177 2.22895C26.8177 2.24961 26.5987 2.37358 26.325 2.51132C25.0524 3.15181 23.8688 4.01957 22.6577 5.19036C22.0146 5.81018 21.8914 5.89972 21.8914 5.76886C21.8914 5.52093 22.254 4.81846 22.5756 4.43279C23.3761 3.46861 24.6077 2.72482 25.9624 2.36669C26.5713 2.2014 26.8177 2.16697 26.8177 2.22895ZM31.0255 5.62424L31.5728 5.76197L31.1213 5.76886C29.055 5.79641 26.1745 6.42313 24.074 7.29777C23.8003 7.40797 23.5677 7.48372 23.554 7.46995C23.4924 7.40797 24.6556 6.58841 25.2303 6.29916C25.7982 6.00991 26.6329 5.72065 27.3171 5.56914C28.1655 5.38319 30.1839 5.41763 31.0255 5.62424ZM17.5741 6.60219C18.7646 7.42174 21.2277 8.50299 22.8288 8.90933C24.3614 9.295 26.9955 9.63246 28.5008 9.63246C29.486 9.63246 28.7266 9.84596 27.2624 9.97681C24.4709 10.2316 21.8504 9.65312 19.5309 8.26884C18.6962 7.77298 16.9036 6.32671 17.1226 6.32671C17.1499 6.32671 17.3552 6.45067 17.5741 6.60219ZM20.1809 10.4451C21.6177 10.7619 23.3146 11.4575 24.4709 12.2013C24.8745 12.463 25.114 12.6627 25.0251 12.6627C25.0114 12.6627 24.6898 12.7247 24.2998 12.8005C22.7877 13.0966 21.0567 12.8556 19.5036 12.1393C19.223 12.0085 18.963 11.9052 18.922 11.9052C18.7852 11.9052 19.6678 12.7454 20.3657 13.2757C22.0762 14.5704 23.6909 15.142 25.6545 15.142C27.194 15.142 28.4529 14.8735 30.786 14.0539C31.7986 13.6958 32.3597 13.6063 33.2081 13.6476C34.3712 13.7027 35.2402 14.0608 36.1091 14.839C36.9028 15.5415 37.628 16.7743 37.9085 17.8968C38.0933 18.6337 38.1069 19.777 37.9359 20.4795C37.628 21.7949 36.8001 23.0965 35.7259 23.9643C34.8023 24.715 33.6049 25.1833 32.3323 25.3004C32.0792 25.3279 31.8944 25.3692 31.9218 25.3968C31.956 25.4243 32.1681 25.5207 32.3939 25.6103C34.1523 26.2921 35.9654 27.697 36.6359 28.8954C37.0396 29.6254 37.1422 30.7204 36.8754 31.4917C36.3007 33.1722 34.6038 35.1556 32.1886 36.9669C30.1976 38.4614 28.5213 39.3291 26.7492 39.7837C26.1061 39.949 25.9077 39.9696 24.8677 39.9627C23.5609 39.9627 23.0682 39.8732 21.8435 39.4118C18.8946 38.303 15.5489 35.7135 13.8658 33.241C13.1474 32.1736 12.7847 31.0234 12.9216 30.2521C13.1952 28.7507 14.9057 27.0221 17.2868 25.8513C17.6699 25.6585 17.9846 25.4863 17.9846 25.4519C17.9915 25.4243 17.8889 25.4037 17.7725 25.4037C17.6494 25.4037 17.2183 25.3279 16.8215 25.2384C13.7973 24.5428 11.9363 22.3734 11.7858 19.3707C11.7242 18.0966 11.9432 17.0291 12.5042 15.9341C12.8805 15.2109 13.8042 14.3018 14.5705 13.9231C15.3573 13.5305 16.1373 13.3377 17.0131 13.3308C17.4031 13.3239 17.6973 13.3032 17.6631 13.2757C17.5331 13.1448 16.671 12.7178 16.3084 12.5939C15.0289 12.1738 12.9421 12.1255 11.6011 12.4906C11.3753 12.5525 11.8542 12.1531 12.381 11.8432C13.7016 11.0581 15.1042 10.5347 16.452 10.328C17.191 10.211 19.442 10.2867 20.1809 10.4451ZM8.28954 14.5704C8.78216 14.7633 9.56899 15.266 9.77425 15.5139C9.84951 15.6035 9.83583 15.7274 9.71951 16.2233C9.56215 16.9258 9.41846 18.434 9.48004 18.7715C9.54162 19.0814 9.41846 19.0607 9.26794 18.7233C9.09689 18.3376 8.60427 17.8486 8.22112 17.6833C7.58481 17.401 6.87324 17.6283 6.29167 18.2894C5.7101 18.9506 5.50484 19.5773 5.50484 20.6516C5.51169 21.5676 5.62116 22.0772 6.00431 22.8555C6.38746 23.6475 7.25639 24.4601 7.89954 24.6185L8.1048 24.6667L7.80375 24.3293C7.33166 23.7921 7.21534 23.4822 7.22218 22.7522C7.22218 22.2839 7.26324 22.0566 7.36587 21.8224C7.68744 21.1131 8.39901 20.3348 9.19952 19.8321L9.54162 19.6186L9.69214 19.9629C9.77425 20.1558 9.9453 20.4519 10.0616 20.6172L10.2874 20.934L10.1985 21.4643C10.0616 22.2907 9.6032 23.5993 9.09005 24.6323C8.59743 25.6378 7.9748 26.6433 7.6806 26.9119C7.50955 27.0565 7.46165 27.0703 7.02377 27.0221C5.55958 26.8775 4.36907 26.2508 3.37698 25.0869C2.11806 23.6199 1.50228 21.5125 1.77596 19.5842C1.93332 18.496 2.337 17.401 2.87068 16.6227C3.50014 15.6999 4.59486 14.7977 5.4159 14.536C6.03168 14.3294 6.1001 14.3225 6.97587 14.3432C7.66007 14.3638 7.83112 14.3914 8.28954 14.5704ZM44.6205 14.536C46.3242 15.1765 47.631 16.7743 48.1442 18.8472C48.2947 19.4464 48.3084 21.3885 48.1715 21.9946C47.6652 24.2191 46.3105 25.9477 44.5247 26.6709C43.9432 26.8981 43.4916 26.9877 42.8621 26.9877H42.3627L41.9932 26.416C41.0353 24.9698 40.269 23.0001 39.9953 21.2715C39.9132 20.7549 39.9132 20.7343 40.0706 20.5414C40.1595 20.4313 40.2827 20.204 40.3443 20.0318C40.4059 19.8596 40.4811 19.6943 40.5085 19.6599C40.5974 19.5635 41.3022 20.0662 41.8016 20.5759C42.9921 21.7949 43.1495 23.31 42.1916 24.3293C42.0479 24.4808 41.9521 24.6185 41.9727 24.6392C41.9932 24.6599 42.2053 24.5772 42.4379 24.4601C43.2795 24.04 43.8542 23.3582 44.2716 22.277C44.4563 21.8018 44.4905 21.602 44.5247 20.9202C44.5453 20.4037 44.5247 19.9905 44.47 19.7494C44.2784 18.9092 43.6011 17.9588 43.0127 17.6833C42.1779 17.3046 41.2474 17.7384 40.7206 18.7577L40.5769 19.0332L40.5701 18.62C40.5701 18.069 40.3922 16.5883 40.2622 16.0718C40.2074 15.8445 40.1664 15.6241 40.1595 15.5828C40.1595 15.4864 40.8506 14.9699 41.2885 14.7426C41.9111 14.4189 42.4311 14.3156 43.3411 14.3432C44.0184 14.3569 44.2442 14.3983 44.6205 14.536Z'
        fill='currentColor'
      />
      <path
        d='M29.3833 16.2715C28.0697 16.5401 26.8518 17.2288 26.1539 18.0966C25.976 18.3238 25.8118 18.5098 25.7913 18.5098C25.7708 18.5167 25.7229 18.3376 25.6818 18.1172C25.5929 17.6558 25.196 16.8087 25.025 16.6985C24.8471 16.5883 24.7034 16.7054 24.4434 17.1393C24.2039 17.5318 24.0671 17.8762 23.944 18.3652L23.8687 18.6613L23.6771 18.3996C23.4103 18.0277 22.6577 17.3528 22.2061 17.0773C21.2756 16.5126 19.9893 16.244 18.8809 16.3817C17.2525 16.5883 16.0414 17.4217 15.4188 18.7577C15.2204 19.1985 14.9946 20.0731 15.0699 20.1489C15.0904 20.1627 15.2272 19.9216 15.3778 19.6048C15.8909 18.5373 16.6162 17.9106 17.6493 17.6489C18.5319 17.4217 20.0577 17.642 21.1114 18.1448C22.0556 18.5924 23.1434 19.4602 23.8071 20.3004L24.0466 20.5965L24.2382 20.445C24.3408 20.3624 24.505 20.1558 24.6008 19.9905C24.7034 19.8183 24.7992 19.6944 24.8129 19.715C24.8334 19.7357 24.8745 19.901 24.9087 20.08C24.9839 20.4932 25.2987 21.1475 25.4013 21.1131C25.4492 21.0993 25.675 20.8169 25.9008 20.4726C27.3034 18.4271 28.877 17.2839 30.5807 17.0842C32.127 16.9051 33.1533 17.3872 34.0085 18.6957C34.4464 19.3569 34.419 19.3362 34.378 19.0676C34.2548 18.2756 33.468 17.2219 32.6333 16.7192C31.7986 16.2233 30.5123 16.0443 29.3833 16.2715Z'
        fill='currentColor'
      />
      <path
        d='M19.5037 18.5511C18.5663 18.8197 17.6016 19.6324 17.3142 20.4037C17.0816 21.0442 17.1363 21.0718 17.6016 20.5552L18.0258 20.08V20.7618C18.0258 21.3679 18.0463 21.485 18.2105 21.8293C18.4363 22.2908 18.9084 22.7728 19.3463 23.0001C19.62 23.1447 19.7637 23.1654 20.3521 23.1654C20.9678 23.1654 21.0705 23.1447 21.3989 22.9726C21.8641 22.7246 22.2952 22.2908 22.5141 21.8569C22.651 21.5607 22.6783 21.4161 22.6783 20.8583C22.6783 20.2866 22.651 20.1627 22.4936 19.8597C21.9326 18.7853 20.6531 18.2274 19.5037 18.5511ZM21.0773 19.6048C21.7478 20.3624 20.8584 21.4574 19.9963 20.9271C19.49 20.6172 19.4284 19.9698 19.8731 19.5566C20.1126 19.3431 20.1536 19.3294 20.5094 19.3569C20.8242 19.3845 20.9199 19.4258 21.0773 19.6048Z'
        fill='currentColor'
      />
      <path
        d='M28.754 18.5511C28.0219 18.7784 27.3241 19.4533 27.1256 20.1144C26.9956 20.569 26.9956 21.2301 27.1256 21.6227C27.3651 22.3114 28.0288 22.9312 28.754 23.1309C29.1782 23.248 29.9172 23.1929 30.3277 23.007C30.7929 22.8004 31.3471 22.2425 31.5661 21.7604C31.7577 21.3334 31.8192 20.7412 31.7235 20.2797L31.6687 20.018L31.8808 20.1695C31.9971 20.2522 32.1887 20.4588 32.3119 20.6241C32.6813 21.1268 32.7498 20.9684 32.4487 20.3211C32.0861 19.5497 31.135 18.7921 30.2045 18.5442C29.7735 18.4271 29.1303 18.4271 28.754 18.5511ZM29.8761 19.5428C30.2593 19.8941 30.2661 20.445 29.8966 20.8238C29.7119 21.0029 29.6435 21.0304 29.3082 21.0304C28.9593 21.0304 28.9114 21.0097 28.6925 20.7756C28.494 20.5483 28.4598 20.4657 28.4598 20.1626C28.4598 19.8527 28.4872 19.7839 28.6925 19.5773C28.8977 19.3706 28.9661 19.3431 29.2945 19.3431C29.6024 19.3431 29.6982 19.3775 29.8761 19.5428Z'
        fill='currentColor'
      />
      <path
        d='M26.154 24.5427C25.9555 24.5978 25.5519 24.77 25.2508 24.9215C24.9498 25.073 24.6624 25.197 24.6145 25.197C24.5666 25.197 24.2998 25.0799 24.0124 24.9284C23.7319 24.7838 23.3556 24.6254 23.1777 24.5771C22.0419 24.2741 20.9061 25.2107 21.5219 25.9545C21.6724 26.1336 22.1377 26.4366 22.2677 26.4366C22.2882 26.4366 22.3019 26.3196 22.3019 26.1749C22.3019 25.9959 22.3498 25.865 22.4319 25.7893C22.6235 25.6171 23.0135 25.5413 23.3077 25.624C23.6156 25.7066 24.1492 26.2094 24.3545 26.6019C24.5119 26.8981 24.5187 26.8981 24.8608 26.8774C25.2029 26.8636 25.2098 26.8567 25.4492 26.4642C25.7229 26.0028 26.1471 25.6515 26.5029 25.5826C26.975 25.4931 27.4266 25.865 27.3239 26.2713C27.2897 26.4091 27.3034 26.4297 27.406 26.3884C27.4813 26.3678 27.666 26.2576 27.8234 26.1474C28.9113 25.4105 27.5908 24.1364 26.154 24.5427Z'
        fill='currentColor'
      />
      <path
        d='M34.7132 30.4381C34.2685 30.8444 33.4132 31.416 32.7701 31.7397C32.257 32.0014 30.9022 32.5386 30.4096 32.6695C28.7196 33.1447 27.9739 33.31 26.5781 33.5235C23.7524 33.9642 21.6176 33.9849 19.1545 33.5923C16.9651 33.248 14.7278 32.1323 13.7972 30.9202C13.462 30.4863 13.4004 30.5621 13.6194 31.1475C13.9683 32.1047 15.5146 33.2618 17.444 34.0331C18.6277 34.5014 20.3929 34.9284 21.9597 35.1281C22.8766 35.2452 25.7228 35.2383 26.6807 35.1281C30.0333 34.7218 33.1533 33.5648 35.0006 32.0428C35.2469 31.8362 35.5069 31.7397 35.5069 31.843C35.5069 31.8637 35.4316 32.0359 35.3358 32.2218C35.1169 32.6626 35.2195 32.6626 35.5343 32.2287C35.8969 31.7328 36.0201 31.3059 35.9927 30.6585C35.9858 30.5758 35.9037 30.4174 35.8079 30.3004C35.6643 30.1282 35.5753 30.0869 35.3632 30.0869C35.1374 30.0869 35.0348 30.142 34.7132 30.4381Z'
        fill='currentColor'
      />
      <path
        d='M4.71118 17.6421C3.99962 18.503 3.51383 19.7151 3.43857 20.817C3.39068 21.6365 3.48647 22.1324 3.83541 22.8555C4.19119 23.5855 4.87539 24.3018 5.53907 24.6324C6.12748 24.9285 6.23695 24.9078 5.86064 24.5773C4.64961 23.5029 3.99277 21.7192 4.17067 20.0043C4.24593 19.295 4.51277 18.3721 4.82066 17.7523C4.92329 17.5594 4.99171 17.3873 4.97802 17.3735C4.96434 17.3597 4.84118 17.4837 4.71118 17.6421Z'
        fill='currentColor'
      />
      <path
        d='M45.0857 17.4217C45.0857 17.4424 45.1883 17.6903 45.3183 17.9727C46.0231 19.5016 46.0778 21.306 45.4689 22.7247C45.1815 23.3927 44.901 23.7991 44.3399 24.3845C44.1005 24.6462 43.9363 24.8528 43.9841 24.8528C44.1278 24.8528 44.771 24.4947 45.1199 24.2192C45.6194 23.8197 45.9615 23.379 46.2694 22.7178C46.5362 22.1531 46.5499 22.1049 46.5773 21.2991C46.6115 20.2798 46.4678 19.6256 46.0025 18.682C45.7425 18.1586 45.0994 17.2702 45.0857 17.4217Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default Logo
