const card_3 = ({ name, summary, userPic, style }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1500" height="600" viewBox="0 0 1500 600">
  <defs>
    <style>
      .background {
        fill: ${style.backgroundColor}
      }

      .summary{
        font-size: 33.333px;
        font-weight: 500;
        fill: ${style.summaryColor}
      }
      .name {
        font-size: 70.833px;
        font-weight: 700;
        fill: ${style.nameColor}
 
      }

      .name,.summary{
        font-family: Poppins;
      }

    </style>
  </defs>
  <rect class="background" y="-3" width="1500" height="603"/>
  <clipPath id="hexagonal-mask">
     <path  d="M0-3L562-1,465.684,600H0V-3Z"/>
  </clipPath>
  <image xlink:href="${userPic}" clip-path="url(#hexagonal-mask)" height="100%" width="600" x="0"/>
  <text id="FULL-STACK_WEB_DEVELOPER_DESIGNER" data-name="FULL-STACK WEB DEVELOPER &amp; DESIGNER" class="summary" x="650" y="351">${summary}</text>
  <text id="MD.USMAN_ANSARI" data-name="MD.USMAN ANSARI" class="name" x="645" y="284">${name}</text>
</svg>`;
};

module.exports = card_3;
