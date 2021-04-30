const card_1 = ({ name, summary, style }) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="600" viewBox="0 0 1500 600">
            <defs>
              <style>
                .background {
                  fill:#fafafa;
                  fill: ${style.backgroundColor};
                }
                .summary{
                  font-size: 33.333px;
                  font-weight: 500;
                  font-family: Poppins;
                  fill: ${style.summaryColor};
                }

                .name{
                  fill: ${style.nameColor};
                  font-family: Poppins;
                  font-size: 66.667px;
                  font-weight: 700;
                }

              </style>
            </defs>
            <rect class="background" x="0" y="0" width="1506" height="604"/>
            <text  dominant-baseline="middle" text-anchor="middle" id="WEB_DEVELOPER_DESIGNER" data-name="WEB DEVELOPER &amp; DESIGNER" class="summary" x="50%" y="349">${summary}</text>
            <text dominant-baseline="middle" text-anchor="middle" id="MD.USMAN_ANSARI" data-name="MD.USMAN ANSARI" class="name" x="50%" y="287">${name}</text>
          </svg>
          `;
};

module.exports = card_1;
