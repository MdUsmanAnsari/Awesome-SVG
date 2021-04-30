const card_2 = ({ name, summary, style }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="600" viewBox="0 0 1500 600">
<defs>
  <style>
    .cls-1 {
      fill:#eee;
      fill: ${style.backgroundColor};
    }

    .cls-2 {
      fill: ${style.nameColor};
    }

    .cls-3 {
      fill: ${style.nameColor};
      opacity:.5;
      fill-opacity: 0.46;
    }

    .cls-4 {
      font-size: 33.333px;
      font-weight: 500;
    }

    .cls-4, .cls-5 {
      fill: ${style.summaryColor};
      font-family: Poppins;
    }

    .cls-5 {
      fill: ${style.nameColor};
      font-size: 66.667px;
      font-weight: 700;
    }
  </style>
</defs>
<rect class="cls-1" x="0" y="0" width="1506" height="604"/>
<circle id="Ellipse_1_copy" data-name="Ellipse 1 copy" class="cls-2" r="50">
 <animateTransform attributeName="transform" attributeType="XML" dur="10s" repeatCount="indefinite" type="translate" values="0 50;0 500;0 50" calcMode="linear"></animateTransform>
</circle>
<circle id="Ellipse_1_copy_2" data-name="Ellipse 1 copy 2" class="cls-2" cx="1500" cy="500" r="50">
 <animateTransform attributeName="transform" attributeType="XML" dur="10s" repeatCount="indefinite" type="translate" values="0 50;0 -450;0 50" calcMode="linear"></animateTransform>
</circle>
<circle id="Ellipse_1_copy_3" data-name="Ellipse 1 copy 3" class="cls-3" cx="395" cy="367" r="99"/>
<circle id="Ellipse_1_copy_4" data-name="Ellipse 1 copy 4" class="cls-3" cx="1090" cy="230" r="99"/>
<text dominant-baseline="middle" text-anchor="middle" id="WEB_DEVELOPER_DESIGNER" data-name="WEB DEVELOPER &amp; DESIGNER" class="cls-4" x="50%" y="353">${summary}</text>
<text dominant-baseline="middle" text-anchor="middle" id="MD.USMAN_ANSARI" data-name="MD.USMAN ANSARI" class="cls-5" x="50%" y="291">${name}</text>

</svg>
`;
};

module.exports = card_2;
