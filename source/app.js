(function () {
  "use strict"

  if (!window.addEventListener) return

  let options = INSTALL_OPTIONS;
  let element;

  function updateElement() {
    element = INSTALL.createElement(options.location, element)
    element.setAttribute("app", "cloudflare-changenow-btn-app")
    element.setAttribute("data-theme", options.theme);
const svgDark = `<svg width="263px" height="42px" viewBox="0 0 263 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>ChangeNOW button</title>
<defs></defs>
<g id="affilate" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="widget-buttons-6" transform="translate(-486.000000, -330.000000)">
        <g id="Group-3" transform="translate(486.000000, 330.000000)">
            <g id="Button-Copy">
                <rect id="Rectangle-3-Copy-2" fill="#2B2B37" x="0" y="0" width="263" height="42" rx="4"></rect>
                <path d="M132.900712,24.6552734 L132.900712,26 L125.479813,26 L125.479813,14.0219727 L132.900712,14.0219727 L132.900712,15.3666992 L126.973954,15.3666992 L126.973954,19.2099609 L132.593583,19.2099609 L132.593583,20.5380859 L126.973954,20.5380859 L126.973954,24.6552734 L132.900712,24.6552734 Z M138.652279,22.621582 L138.519467,22.621582 L136.394467,26 L134.775815,26 L137.838803,21.5258789 L134.742611,17.0517578 L136.444272,17.0517578 L138.569272,20.3803711 L138.702084,20.3803711 L140.802182,17.0517578 L142.420834,17.0517578 L139.382748,21.4677734 L142.462338,26 L140.768979,26 L138.652279,22.621582 Z M151.459511,19.7910156 L150.015175,19.7910156 C149.898964,19.3483051 149.645792,18.9692399 149.255654,18.6538086 C148.865515,18.3383773 148.349488,18.1806641 147.707558,18.1806641 C146.905145,18.1806641 146.267375,18.4794892 145.794228,19.0771484 C145.321081,19.6748077 145.084511,20.4799754 145.084511,21.4926758 C145.084511,22.5275117 145.322465,23.3492808 145.798378,23.9580078 C146.274292,24.5667348 146.910679,24.8710938 147.707558,24.8710938 C148.310751,24.8710938 148.812943,24.7355157 149.21415,24.4643555 C149.615356,24.1931953 149.882362,23.8058293 150.015175,23.3022461 L151.459511,23.3022461 C151.332232,24.1212606 150.944866,24.8019179 150.297402,25.3442383 C149.649938,25.8865587 148.789432,26.1577148 147.715859,26.1577148 C146.465202,26.1577148 145.467734,25.7357627 144.723427,24.8918457 C143.97912,24.0479287 143.606972,22.9148834 143.606972,21.4926758 C143.606972,20.0981376 143.977737,18.9830771 144.719277,18.1474609 C145.460817,17.3118448 146.456901,16.894043 147.707558,16.894043 C148.797733,16.894043 149.665156,17.1776502 150.309853,17.744873 C150.95455,18.3120959 151.337766,18.9941366 151.459511,19.7910156 Z M153.708149,26 L153.708149,13.4990234 L155.135884,13.4990234 L155.135884,18.4628906 L155.268696,18.4628906 C155.495585,17.9703751 155.840064,17.5857761 156.302143,17.309082 C156.764222,17.0323879 157.338354,16.894043 158.024555,16.894043 C158.970849,16.894043 159.722062,17.183184 160.278217,17.7614746 C160.834373,18.3397653 161.112446,19.1546171 161.112446,20.2060547 L161.112446,26 L159.684712,26 L159.684712,20.5546875 C159.684712,19.7633424 159.509014,19.1698425 159.157612,18.7741699 C158.806211,18.3784974 158.292951,18.1806641 157.617817,18.1806641 C156.815404,18.1806641 156.201153,18.4117002 155.775044,18.8737793 C155.348935,19.3358584 155.135884,19.9459598 155.135884,20.7041016 L155.135884,26 L153.708149,26 Z M166.531982,24.9042969 C167.267989,24.9042969 167.87809,24.6898622 168.362305,24.2609863 C168.846519,23.8321105 169.088623,23.2994823 169.088623,22.6630859 L169.088623,21.8413086 L166.681396,21.9990234 C165.3754,22.0875655 164.722412,22.5745398 164.722412,23.4599609 C164.722412,23.9137392 164.89396,24.2679024 165.237061,24.5224609 C165.580161,24.7770195 166.011798,24.9042969 166.531982,24.9042969 Z M166.266357,26.1577148 C165.397538,26.1577148 164.676761,25.918378 164.104004,25.4396973 C163.531247,24.9610165 163.244873,24.3121786 163.244873,23.4931641 C163.244873,21.855135 164.332265,20.9724941 166.50708,20.8452148 L169.088623,20.6875 L169.088623,19.8740234 C169.088623,18.7340438 168.4135,18.1640625 167.063232,18.1640625 C166.526446,18.1640625 166.080975,18.260904 165.726807,18.4545898 C165.372638,18.6482757 165.145752,18.9221987 165.046143,19.2763672 L163.601807,19.2763672 C163.695883,18.5569625 164.066647,17.980064 164.714111,17.5456543 C165.361576,17.1112446 166.161209,16.894043 167.113037,16.894043 C168.203212,16.894043 169.042966,17.1582819 169.632324,17.6867676 C170.221683,18.2152533 170.516357,18.9443313 170.516357,19.8740234 L170.516357,26 L169.155029,26 L169.155029,24.6801758 L169.022217,24.6801758 C168.734455,25.1560896 168.352623,25.5213203 167.876709,25.7758789 C167.400795,26.0304375 166.864017,26.1577148 166.266357,26.1577148 Z M173.213238,26 L173.213238,17.0517578 L174.574566,17.0517578 L174.574566,18.4628906 L174.707378,18.4628906 C174.934267,17.9703751 175.267679,17.5857761 175.707622,17.309082 C176.147566,17.0323879 176.71063,16.894043 177.396831,16.894043 C178.403998,16.894043 179.177346,17.1804171 179.7169,17.7531738 C180.256453,18.3259306 180.526226,19.1435494 180.526226,20.2060547 L180.526226,26 L179.098491,26 L179.098491,20.5546875 C179.098491,19.7467408 178.92556,19.1490905 178.579693,18.7617188 C178.233825,18.374347 177.703964,18.1806641 176.990093,18.1806641 C176.276222,18.1806641 175.706241,18.4047829 175.280132,18.8530273 C174.854023,19.3012718 174.640972,19.9182903 174.640972,20.7041016 L174.640972,26 L173.213238,26 Z M186.809044,24.6054688 C187.639126,24.6054688 188.289347,24.3135609 188.759727,23.7297363 C189.230107,23.1459118 189.465294,22.3670296 189.465294,21.3930664 C189.465294,20.4191032 189.228724,19.640221 188.755577,19.0563965 C188.28243,18.472572 187.633592,18.1806641 186.809044,18.1806641 C185.978961,18.1806641 185.339807,18.472572 184.891563,19.0563965 C184.443319,19.640221 184.2192,20.4191032 184.2192,21.3930664 C184.2192,22.3670296 184.443319,23.1459118 184.891563,23.7297363 C185.339807,24.3135609 185.978961,24.6054688 186.809044,24.6054688 Z M186.87545,29.4365234 C185.796343,29.4365234 184.92892,29.213788 184.273155,28.7683105 C183.61739,28.3228331 183.234174,27.7293331 183.123497,26.987793 L184.634239,26.987793 C184.711713,27.3530292 184.944133,27.6449371 185.331504,27.8635254 C185.718876,28.0821137 186.233519,28.1914062 186.87545,28.1914062 C187.677863,28.1914062 188.304565,28.0046405 188.755577,27.6311035 C189.206588,27.2575665 189.43209,26.7415398 189.43209,26.0830078 L189.43209,24.3232422 L189.299278,24.3232422 C189.01705,24.8157577 188.632451,25.1962063 188.145469,25.4645996 C187.658488,25.7329929 187.107875,25.8671875 186.493614,25.8671875 C185.337033,25.8671875 184.422572,25.4563029 183.750206,24.6345215 C183.077839,23.81274 182.741661,22.7322658 182.741661,21.3930664 C182.741661,20.053867 183.079222,18.9692424 183.754356,18.1391602 C184.42949,17.3090779 185.342566,16.894043 186.493614,16.894043 C187.118942,16.894043 187.690307,17.0365383 188.207725,17.3215332 C188.725143,17.6065281 189.111126,17.9897437 189.365684,18.4711914 L189.498497,18.4711914 L189.498497,17.0517578 L190.859825,17.0517578 L190.859825,26.1577148 C190.859825,27.1593475 190.501511,27.9562145 189.784874,28.5483398 C189.068236,29.1404652 188.098438,29.4365234 186.87545,29.4365234 Z M197.175846,18.1557617 C196.461975,18.1557617 195.875392,18.396482 195.41608,18.8779297 C194.956768,19.3593774 194.699446,19.9957643 194.644107,20.7871094 L199.574771,20.7871094 C199.55817,19.9957643 199.331284,19.3593774 198.894107,18.8779297 C198.456931,18.396482 197.884182,18.1557617 197.175846,18.1557617 Z M199.533267,23.684082 L200.961002,23.684082 C200.74518,24.4532916 200.30801,25.0578591 199.649478,25.4978027 C198.990946,25.9377463 198.171944,26.1577148 197.192447,26.1577148 C195.952858,26.1577148 194.970608,25.7412965 194.24567,24.9084473 C193.520731,24.075598 193.158267,22.9508534 193.158267,21.5341797 C193.158267,20.1285737 193.523498,19.0038291 194.253971,18.1599121 C194.984443,17.3159951 195.963925,16.894043 197.192447,16.894043 C198.398833,16.894043 199.34788,17.2966268 200.039615,18.1018066 C200.73135,18.9069864 201.077213,20.0040621 201.077213,21.3930664 L201.077213,21.940918 L194.644107,21.940918 L194.644107,22.0073242 C194.682844,22.8927453 194.933249,23.5955378 195.395328,24.1157227 C195.857407,24.6359075 196.467508,24.8959961 197.22565,24.8959961 C197.801174,24.8959961 198.282614,24.7922374 198.669986,24.5847168 C199.057358,24.3771962 199.345115,24.0769876 199.533267,23.684082 Z" id="Exchange" fill="#FFFFFF"></path>
            </g>
            <g id="Group-7" transform="translate(12.000000, 8.000000)">
                <path d="M2.21375443,23.8206381 L0.857142857,23.8206381 L0.857142857,13.0365047 L2.19089019,13.0365047 L8.21180673,21.5038804 L8.28039945,21.5038804 L8.28039945,13.0365047 L9.63701102,13.0365047 L9.63701102,23.8206381 L8.30326369,23.8206381 L2.28234715,15.3831561 L2.21375443,15.3831561 L2.21375443,23.8206381 Z M16.932736,12.8571429 C20.049894,12.8571429 22.0009759,15.0094855 22.0009759,18.4323081 C22.0009759,21.8551308 20.049894,24 16.932736,24 C13.8155779,24 11.8644961,21.8551308 11.8644961,18.4323081 C11.8644961,15.0094855 13.8155779,12.8571429 16.932736,12.8571429 Z M16.932736,14.0977292 C14.6844191,14.0977292 13.2744576,15.7717735 13.2744576,18.4323081 C13.2744576,21.0853694 14.6844191,22.7594136 16.932736,22.7594136 C19.1810529,22.7594136 20.5910144,21.0853694 20.5910144,18.4323081 C20.5910144,15.7717735 19.1810529,14.0977292 16.932736,14.0977292 Z M29.9521424,15.2635815 L27.4142117,23.8206381 L26.1185715,23.8206381 L23.123356,13.0365047 L24.5561817,13.0365047 L26.7587702,21.840184 L26.8197415,21.840184 L29.2967008,13.0365047 L30.6837981,13.0365047 L33.1607574,21.840184 L33.2217287,21.840184 L35.4243171,13.0365047 L36.8571429,13.0365047 L33.8619274,23.8206381 L32.5662871,23.8206381 L30.0283565,15.2635815 L29.9521424,15.2635815 Z" id="NOW-Copy" fill="#3BEE81"></path>
                <path d="M5.21975439,4.23721387 L4.27422684,4.23721387 C4.15258003,3.61169449 3.62175755,3.11671829 2.72599461,3.11671829 C1.68646725,3.11671829 0.978703947,3.96524892 0.978703947,5.25980207 C0.978703947,6.59243031 1.69752606,7.40288585 2.73705341,7.40288585 C3.56646354,7.40288585 4.11940362,7.02213492 4.28528565,6.31502606 L5.23081319,6.31502606 C5.07046056,7.45727884 4.09175662,8.24597719 2.73152401,8.24597719 C1.09482136,8.24597719 0,7.10372441 0,5.25980207 C0,3.45939412 1.08929196,2.27362695 2.72046521,2.27362695 C4.19681523,2.27362695 5.09810757,3.20918637 5.21975439,4.23721387 Z M6.39825402,8.1915842 L6.39825402,0 L7.36036977,0 L7.36036977,3.27989726 L7.38248737,3.27989726 C7.75295723,2.61630279 8.36119132,2.27362695 9.27354246,2.27362695 C10.5784811,2.27362695 11.3747148,3.14391478 11.3747148,4.44934653 L11.3747148,8.1915842 L10.412599,8.1915842 L10.412599,4.6179648 C10.412599,3.68240538 9.93154116,3.11671829 8.98601361,3.11671829 C7.97966266,3.11671829 7.36036977,3.79119136 7.36036977,4.81921886 L7.36036977,8.1915842 L6.39825402,8.1915842 Z M14.7870923,7.42464305 C15.7602669,7.42464305 16.4735596,6.80456297 16.4735596,5.96147163 L16.4735596,5.48825263 L14.9142686,5.58616001 C14.0185056,5.640553 13.554036,5.96147163 13.554036,6.52715872 C13.554036,7.07108862 14.0350938,7.42464305 14.7870923,7.42464305 Z M14.5825045,8.24597719 C13.3715657,8.24597719 12.5698026,7.56062552 12.5698026,6.52171942 C12.5698026,5.51544912 13.3549775,4.92256554 14.8036806,4.83553675 L16.4735596,4.73762937 L16.4735596,4.24809247 C16.4735596,3.51922641 15.9869723,3.11671829 15.1077976,3.11671829 C14.4166225,3.11671829 13.9023882,3.46483342 13.7862708,4.01964191 L12.8628609,4.01964191 C12.8905079,3.02968951 13.8692118,2.27362695 15.1188564,2.27362695 C16.5288536,2.27362695 17.4356753,3.01337161 17.4356753,4.16650298 L17.4356753,8.1915842 L16.5233242,8.1915842 L16.5233242,7.1744353 L16.5012066,7.1744353 C16.1639132,7.82715117 15.417444,8.24597719 14.5825045,8.24597719 Z M18.9017038,8.1915842 L18.9017038,2.32801994 L19.8085256,2.32801994 L19.8085256,3.27989726 L19.8306432,3.27989726 C20.2066424,2.61630279 20.7982883,2.27362695 21.7216983,2.27362695 C23.0321663,2.27362695 23.7896942,3.10040039 23.7896942,4.43302863 L23.7896942,8.1915842 L22.8275784,8.1915842 L22.8275784,4.5962076 C22.8275784,3.63889099 22.3741676,3.11671829 21.4341694,3.11671829 C20.4554655,3.11671829 19.8638196,3.78031276 19.8638196,4.78658306 L19.8638196,8.1915842 L18.9017038,8.1915842 Z M27.6665414,7.34849286 C28.7115982,7.34849286 29.4193615,6.49452293 29.4193615,5.23804487 C29.4193615,3.97612752 28.7115982,3.11671829 27.6665414,3.11671829 C26.6270141,3.11671829 25.9468978,3.95437033 25.9468978,5.23804487 C25.9468978,6.51628012 26.6270141,7.34849286 27.6665414,7.34849286 Z M27.6831296,10.2857143 C26.3339558,10.2857143 25.3552519,9.64387701 25.2170168,8.6702425 L26.2178384,8.6702425 C26.3616028,9.15977941 26.9532487,9.46438015 27.7384236,9.46438015 C28.7668922,9.46438015 29.4193615,8.93676815 29.4193615,8.10455541 L29.4193615,7.18531389 L29.3972439,7.18531389 C29.0212446,7.82171187 28.3190107,8.1915842 27.4840712,8.1915842 C25.9745448,8.1915842 24.9626644,7.01125633 24.9626644,5.23804487 C24.9626644,3.44851552 25.9745448,2.27362695 27.5061888,2.27362695 C28.3466577,2.27362695 29.0488916,2.63805998 29.4470085,3.27989726 L29.4635967,3.27989726 L29.4635967,2.32801994 L30.3814772,2.32801994 L30.3814772,8.02840523 C30.3814772,9.43174435 29.3585381,10.2857143 27.6831296,10.2857143 Z M34.2527951,3.10583969 C33.3183263,3.10583969 32.6437394,3.77487346 32.5773866,4.76482587 L35.8563213,4.76482587 C35.8342037,3.76943416 35.1927932,3.10583969 34.2527951,3.10583969 Z M35.8342037,6.51628012 L36.7852606,6.51628012 C36.6193786,7.52255043 35.5853807,8.24597719 34.3136185,8.24597719 C32.63821,8.24597719 31.5820945,7.09828511 31.5820945,5.28155927 C31.5820945,3.46483342 32.6437394,2.27362695 34.2693833,2.27362695 C35.8618507,2.27362695 36.8571429,3.37780464 36.8571429,5.15101609 L36.8571429,5.52088842 L32.5773866,5.52088842 L32.5773866,5.57528141 C32.5773866,6.69033769 33.2740911,7.41376445 34.3357361,7.41376445 C35.0822052,7.41376445 35.6627923,7.06564932 35.8342037,6.51628012 Z" id="change-copy" fill="#FFFFFF"></path>
            </g>
            <path d="M62.5,10.9952861 L62.5,32.0059502" id="Line" stroke="#CECCD9" stroke-width="2" opacity="0.300000012" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
    </g>
</g>
</svg>`;
const svgLight = `<svg width="263px" height="42px" viewBox="0 0 263 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>ChangeNOW button</title>
<defs></defs>
<g id="affilate" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="widget-buttons-6" transform="translate(-486.000000, -330.000000)">
        <g id="Group-3" transform="translate(486.000000, 330.000000)">
            <g id="Button-Copy">
                <rect id="Rectangle-3-Copy-2" fill="#fff" x="0" y="0" width="263" height="42" rx="4"></rect>
                <path d="M132.900712,24.6552734 L132.900712,26 L125.479813,26 L125.479813,14.0219727 L132.900712,14.0219727 L132.900712,15.3666992 L126.973954,15.3666992 L126.973954,19.2099609 L132.593583,19.2099609 L132.593583,20.5380859 L126.973954,20.5380859 L126.973954,24.6552734 L132.900712,24.6552734 Z M138.652279,22.621582 L138.519467,22.621582 L136.394467,26 L134.775815,26 L137.838803,21.5258789 L134.742611,17.0517578 L136.444272,17.0517578 L138.569272,20.3803711 L138.702084,20.3803711 L140.802182,17.0517578 L142.420834,17.0517578 L139.382748,21.4677734 L142.462338,26 L140.768979,26 L138.652279,22.621582 Z M151.459511,19.7910156 L150.015175,19.7910156 C149.898964,19.3483051 149.645792,18.9692399 149.255654,18.6538086 C148.865515,18.3383773 148.349488,18.1806641 147.707558,18.1806641 C146.905145,18.1806641 146.267375,18.4794892 145.794228,19.0771484 C145.321081,19.6748077 145.084511,20.4799754 145.084511,21.4926758 C145.084511,22.5275117 145.322465,23.3492808 145.798378,23.9580078 C146.274292,24.5667348 146.910679,24.8710938 147.707558,24.8710938 C148.310751,24.8710938 148.812943,24.7355157 149.21415,24.4643555 C149.615356,24.1931953 149.882362,23.8058293 150.015175,23.3022461 L151.459511,23.3022461 C151.332232,24.1212606 150.944866,24.8019179 150.297402,25.3442383 C149.649938,25.8865587 148.789432,26.1577148 147.715859,26.1577148 C146.465202,26.1577148 145.467734,25.7357627 144.723427,24.8918457 C143.97912,24.0479287 143.606972,22.9148834 143.606972,21.4926758 C143.606972,20.0981376 143.977737,18.9830771 144.719277,18.1474609 C145.460817,17.3118448 146.456901,16.894043 147.707558,16.894043 C148.797733,16.894043 149.665156,17.1776502 150.309853,17.744873 C150.95455,18.3120959 151.337766,18.9941366 151.459511,19.7910156 Z M153.708149,26 L153.708149,13.4990234 L155.135884,13.4990234 L155.135884,18.4628906 L155.268696,18.4628906 C155.495585,17.9703751 155.840064,17.5857761 156.302143,17.309082 C156.764222,17.0323879 157.338354,16.894043 158.024555,16.894043 C158.970849,16.894043 159.722062,17.183184 160.278217,17.7614746 C160.834373,18.3397653 161.112446,19.1546171 161.112446,20.2060547 L161.112446,26 L159.684712,26 L159.684712,20.5546875 C159.684712,19.7633424 159.509014,19.1698425 159.157612,18.7741699 C158.806211,18.3784974 158.292951,18.1806641 157.617817,18.1806641 C156.815404,18.1806641 156.201153,18.4117002 155.775044,18.8737793 C155.348935,19.3358584 155.135884,19.9459598 155.135884,20.7041016 L155.135884,26 L153.708149,26 Z M166.531982,24.9042969 C167.267989,24.9042969 167.87809,24.6898622 168.362305,24.2609863 C168.846519,23.8321105 169.088623,23.2994823 169.088623,22.6630859 L169.088623,21.8413086 L166.681396,21.9990234 C165.3754,22.0875655 164.722412,22.5745398 164.722412,23.4599609 C164.722412,23.9137392 164.89396,24.2679024 165.237061,24.5224609 C165.580161,24.7770195 166.011798,24.9042969 166.531982,24.9042969 Z M166.266357,26.1577148 C165.397538,26.1577148 164.676761,25.918378 164.104004,25.4396973 C163.531247,24.9610165 163.244873,24.3121786 163.244873,23.4931641 C163.244873,21.855135 164.332265,20.9724941 166.50708,20.8452148 L169.088623,20.6875 L169.088623,19.8740234 C169.088623,18.7340438 168.4135,18.1640625 167.063232,18.1640625 C166.526446,18.1640625 166.080975,18.260904 165.726807,18.4545898 C165.372638,18.6482757 165.145752,18.9221987 165.046143,19.2763672 L163.601807,19.2763672 C163.695883,18.5569625 164.066647,17.980064 164.714111,17.5456543 C165.361576,17.1112446 166.161209,16.894043 167.113037,16.894043 C168.203212,16.894043 169.042966,17.1582819 169.632324,17.6867676 C170.221683,18.2152533 170.516357,18.9443313 170.516357,19.8740234 L170.516357,26 L169.155029,26 L169.155029,24.6801758 L169.022217,24.6801758 C168.734455,25.1560896 168.352623,25.5213203 167.876709,25.7758789 C167.400795,26.0304375 166.864017,26.1577148 166.266357,26.1577148 Z M173.213238,26 L173.213238,17.0517578 L174.574566,17.0517578 L174.574566,18.4628906 L174.707378,18.4628906 C174.934267,17.9703751 175.267679,17.5857761 175.707622,17.309082 C176.147566,17.0323879 176.71063,16.894043 177.396831,16.894043 C178.403998,16.894043 179.177346,17.1804171 179.7169,17.7531738 C180.256453,18.3259306 180.526226,19.1435494 180.526226,20.2060547 L180.526226,26 L179.098491,26 L179.098491,20.5546875 C179.098491,19.7467408 178.92556,19.1490905 178.579693,18.7617188 C178.233825,18.374347 177.703964,18.1806641 176.990093,18.1806641 C176.276222,18.1806641 175.706241,18.4047829 175.280132,18.8530273 C174.854023,19.3012718 174.640972,19.9182903 174.640972,20.7041016 L174.640972,26 L173.213238,26 Z M186.809044,24.6054688 C187.639126,24.6054688 188.289347,24.3135609 188.759727,23.7297363 C189.230107,23.1459118 189.465294,22.3670296 189.465294,21.3930664 C189.465294,20.4191032 189.228724,19.640221 188.755577,19.0563965 C188.28243,18.472572 187.633592,18.1806641 186.809044,18.1806641 C185.978961,18.1806641 185.339807,18.472572 184.891563,19.0563965 C184.443319,19.640221 184.2192,20.4191032 184.2192,21.3930664 C184.2192,22.3670296 184.443319,23.1459118 184.891563,23.7297363 C185.339807,24.3135609 185.978961,24.6054688 186.809044,24.6054688 Z M186.87545,29.4365234 C185.796343,29.4365234 184.92892,29.213788 184.273155,28.7683105 C183.61739,28.3228331 183.234174,27.7293331 183.123497,26.987793 L184.634239,26.987793 C184.711713,27.3530292 184.944133,27.6449371 185.331504,27.8635254 C185.718876,28.0821137 186.233519,28.1914062 186.87545,28.1914062 C187.677863,28.1914062 188.304565,28.0046405 188.755577,27.6311035 C189.206588,27.2575665 189.43209,26.7415398 189.43209,26.0830078 L189.43209,24.3232422 L189.299278,24.3232422 C189.01705,24.8157577 188.632451,25.1962063 188.145469,25.4645996 C187.658488,25.7329929 187.107875,25.8671875 186.493614,25.8671875 C185.337033,25.8671875 184.422572,25.4563029 183.750206,24.6345215 C183.077839,23.81274 182.741661,22.7322658 182.741661,21.3930664 C182.741661,20.053867 183.079222,18.9692424 183.754356,18.1391602 C184.42949,17.3090779 185.342566,16.894043 186.493614,16.894043 C187.118942,16.894043 187.690307,17.0365383 188.207725,17.3215332 C188.725143,17.6065281 189.111126,17.9897437 189.365684,18.4711914 L189.498497,18.4711914 L189.498497,17.0517578 L190.859825,17.0517578 L190.859825,26.1577148 C190.859825,27.1593475 190.501511,27.9562145 189.784874,28.5483398 C189.068236,29.1404652 188.098438,29.4365234 186.87545,29.4365234 Z M197.175846,18.1557617 C196.461975,18.1557617 195.875392,18.396482 195.41608,18.8779297 C194.956768,19.3593774 194.699446,19.9957643 194.644107,20.7871094 L199.574771,20.7871094 C199.55817,19.9957643 199.331284,19.3593774 198.894107,18.8779297 C198.456931,18.396482 197.884182,18.1557617 197.175846,18.1557617 Z M199.533267,23.684082 L200.961002,23.684082 C200.74518,24.4532916 200.30801,25.0578591 199.649478,25.4978027 C198.990946,25.9377463 198.171944,26.1577148 197.192447,26.1577148 C195.952858,26.1577148 194.970608,25.7412965 194.24567,24.9084473 C193.520731,24.075598 193.158267,22.9508534 193.158267,21.5341797 C193.158267,20.1285737 193.523498,19.0038291 194.253971,18.1599121 C194.984443,17.3159951 195.963925,16.894043 197.192447,16.894043 C198.398833,16.894043 199.34788,17.2966268 200.039615,18.1018066 C200.73135,18.9069864 201.077213,20.0040621 201.077213,21.3930664 L201.077213,21.940918 L194.644107,21.940918 L194.644107,22.0073242 C194.682844,22.8927453 194.933249,23.5955378 195.395328,24.1157227 C195.857407,24.6359075 196.467508,24.8959961 197.22565,24.8959961 C197.801174,24.8959961 198.282614,24.7922374 198.669986,24.5847168 C199.057358,24.3771962 199.345115,24.0769876 199.533267,23.684082 Z" id="Exchange" fill="#000"></path>
            </g>
            <g id="Group-7" transform="translate(12.000000, 8.000000)">
                <path d="M2.21375443,23.8206381 L0.857142857,23.8206381 L0.857142857,13.0365047 L2.19089019,13.0365047 L8.21180673,21.5038804 L8.28039945,21.5038804 L8.28039945,13.0365047 L9.63701102,13.0365047 L9.63701102,23.8206381 L8.30326369,23.8206381 L2.28234715,15.3831561 L2.21375443,15.3831561 L2.21375443,23.8206381 Z M16.932736,12.8571429 C20.049894,12.8571429 22.0009759,15.0094855 22.0009759,18.4323081 C22.0009759,21.8551308 20.049894,24 16.932736,24 C13.8155779,24 11.8644961,21.8551308 11.8644961,18.4323081 C11.8644961,15.0094855 13.8155779,12.8571429 16.932736,12.8571429 Z M16.932736,14.0977292 C14.6844191,14.0977292 13.2744576,15.7717735 13.2744576,18.4323081 C13.2744576,21.0853694 14.6844191,22.7594136 16.932736,22.7594136 C19.1810529,22.7594136 20.5910144,21.0853694 20.5910144,18.4323081 C20.5910144,15.7717735 19.1810529,14.0977292 16.932736,14.0977292 Z M29.9521424,15.2635815 L27.4142117,23.8206381 L26.1185715,23.8206381 L23.123356,13.0365047 L24.5561817,13.0365047 L26.7587702,21.840184 L26.8197415,21.840184 L29.2967008,13.0365047 L30.6837981,13.0365047 L33.1607574,21.840184 L33.2217287,21.840184 L35.4243171,13.0365047 L36.8571429,13.0365047 L33.8619274,23.8206381 L32.5662871,23.8206381 L30.0283565,15.2635815 L29.9521424,15.2635815 Z" id="NOW-Copy" fill="#3BEE81"></path>
                <path d="M5.21975439,4.23721387 L4.27422684,4.23721387 C4.15258003,3.61169449 3.62175755,3.11671829 2.72599461,3.11671829 C1.68646725,3.11671829 0.978703947,3.96524892 0.978703947,5.25980207 C0.978703947,6.59243031 1.69752606,7.40288585 2.73705341,7.40288585 C3.56646354,7.40288585 4.11940362,7.02213492 4.28528565,6.31502606 L5.23081319,6.31502606 C5.07046056,7.45727884 4.09175662,8.24597719 2.73152401,8.24597719 C1.09482136,8.24597719 0,7.10372441 0,5.25980207 C0,3.45939412 1.08929196,2.27362695 2.72046521,2.27362695 C4.19681523,2.27362695 5.09810757,3.20918637 5.21975439,4.23721387 Z M6.39825402,8.1915842 L6.39825402,0 L7.36036977,0 L7.36036977,3.27989726 L7.38248737,3.27989726 C7.75295723,2.61630279 8.36119132,2.27362695 9.27354246,2.27362695 C10.5784811,2.27362695 11.3747148,3.14391478 11.3747148,4.44934653 L11.3747148,8.1915842 L10.412599,8.1915842 L10.412599,4.6179648 C10.412599,3.68240538 9.93154116,3.11671829 8.98601361,3.11671829 C7.97966266,3.11671829 7.36036977,3.79119136 7.36036977,4.81921886 L7.36036977,8.1915842 L6.39825402,8.1915842 Z M14.7870923,7.42464305 C15.7602669,7.42464305 16.4735596,6.80456297 16.4735596,5.96147163 L16.4735596,5.48825263 L14.9142686,5.58616001 C14.0185056,5.640553 13.554036,5.96147163 13.554036,6.52715872 C13.554036,7.07108862 14.0350938,7.42464305 14.7870923,7.42464305 Z M14.5825045,8.24597719 C13.3715657,8.24597719 12.5698026,7.56062552 12.5698026,6.52171942 C12.5698026,5.51544912 13.3549775,4.92256554 14.8036806,4.83553675 L16.4735596,4.73762937 L16.4735596,4.24809247 C16.4735596,3.51922641 15.9869723,3.11671829 15.1077976,3.11671829 C14.4166225,3.11671829 13.9023882,3.46483342 13.7862708,4.01964191 L12.8628609,4.01964191 C12.8905079,3.02968951 13.8692118,2.27362695 15.1188564,2.27362695 C16.5288536,2.27362695 17.4356753,3.01337161 17.4356753,4.16650298 L17.4356753,8.1915842 L16.5233242,8.1915842 L16.5233242,7.1744353 L16.5012066,7.1744353 C16.1639132,7.82715117 15.417444,8.24597719 14.5825045,8.24597719 Z M18.9017038,8.1915842 L18.9017038,2.32801994 L19.8085256,2.32801994 L19.8085256,3.27989726 L19.8306432,3.27989726 C20.2066424,2.61630279 20.7982883,2.27362695 21.7216983,2.27362695 C23.0321663,2.27362695 23.7896942,3.10040039 23.7896942,4.43302863 L23.7896942,8.1915842 L22.8275784,8.1915842 L22.8275784,4.5962076 C22.8275784,3.63889099 22.3741676,3.11671829 21.4341694,3.11671829 C20.4554655,3.11671829 19.8638196,3.78031276 19.8638196,4.78658306 L19.8638196,8.1915842 L18.9017038,8.1915842 Z M27.6665414,7.34849286 C28.7115982,7.34849286 29.4193615,6.49452293 29.4193615,5.23804487 C29.4193615,3.97612752 28.7115982,3.11671829 27.6665414,3.11671829 C26.6270141,3.11671829 25.9468978,3.95437033 25.9468978,5.23804487 C25.9468978,6.51628012 26.6270141,7.34849286 27.6665414,7.34849286 Z M27.6831296,10.2857143 C26.3339558,10.2857143 25.3552519,9.64387701 25.2170168,8.6702425 L26.2178384,8.6702425 C26.3616028,9.15977941 26.9532487,9.46438015 27.7384236,9.46438015 C28.7668922,9.46438015 29.4193615,8.93676815 29.4193615,8.10455541 L29.4193615,7.18531389 L29.3972439,7.18531389 C29.0212446,7.82171187 28.3190107,8.1915842 27.4840712,8.1915842 C25.9745448,8.1915842 24.9626644,7.01125633 24.9626644,5.23804487 C24.9626644,3.44851552 25.9745448,2.27362695 27.5061888,2.27362695 C28.3466577,2.27362695 29.0488916,2.63805998 29.4470085,3.27989726 L29.4635967,3.27989726 L29.4635967,2.32801994 L30.3814772,2.32801994 L30.3814772,8.02840523 C30.3814772,9.43174435 29.3585381,10.2857143 27.6831296,10.2857143 Z M34.2527951,3.10583969 C33.3183263,3.10583969 32.6437394,3.77487346 32.5773866,4.76482587 L35.8563213,4.76482587 C35.8342037,3.76943416 35.1927932,3.10583969 34.2527951,3.10583969 Z M35.8342037,6.51628012 L36.7852606,6.51628012 C36.6193786,7.52255043 35.5853807,8.24597719 34.3136185,8.24597719 C32.63821,8.24597719 31.5820945,7.09828511 31.5820945,5.28155927 C31.5820945,3.46483342 32.6437394,2.27362695 34.2693833,2.27362695 C35.8618507,2.27362695 36.8571429,3.37780464 36.8571429,5.15101609 L36.8571429,5.52088842 L32.5773866,5.52088842 L32.5773866,5.57528141 C32.5773866,6.69033769 33.2740911,7.41376445 34.3357361,7.41376445 C35.0822052,7.41376445 35.6627923,7.06564932 35.8342037,6.51628012 Z" id="change-copy" fill="#000000"></path>
            </g>
            <path d="M62.5,10.9952861 L62.5,32.0059502" id="Line" stroke="#CECCD9" stroke-width="2" opacity="0.300000012" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
    </g>
</g>
</svg>`;

    const defaultfrom = options.defaultfrom ? options.defaultfrom : 'BTC';
    const defaultto = options.defaultto ? options.defaultto : 'ETH';
    const faq = Boolean(options.faq);
    const amount = Number(options.amount);
    const isLogo = Boolean(options.logo);
    const isButton = Boolean(options.isbutton);
    const language = Boolean(options.language);
    const defaultlanguage = options.defaultlanguage;
    let locale = 'en-US'
    switch (defaultlanguage) {
      case 'russian':
        locale = 'ru-RU'
        break;
      case 'korean':
        locale = 'ko-KR'
        break;
      case 'portoguese':
        locale = 'pt-PT'
        break;

      default:
        locale = 'en-US'
        break;
    }
    const theme = options.theme;
    let affiliate = '7a525b7dfb9369';
    if(affiliate){
      if(typeof affiliate === 'string'){
        if(affiliate.length > 5){
          affiliate = options.affiliate;
        }
      }
    }
    const logoContainer = document.createElement("a")
    const imgContainer = document.createElement("div");
    
    const widgetContainer = document.createElement("div")
    logoContainer.className = "logo-container"
    logoContainer.href = `"https://changenow.io/exchange?amount=${amount}&from=${defaultfrom.toLowerCase()}&to=${defaultto.toLowerCase()}&link_id=${affiliate}"`
    logoContainer.target = "_blank";
    logoContainer.rel = "noopener";
    imgContainer.alt = "ChangeNOW button";
    
   
    const widgetHtmlString = `<iframe id='iframe-widget' src='https://changenow.io/embeds/exchange-widget/v2/widget.html?amount=${amount}&from=${defaultfrom.toLowerCase()}&link_id=${affiliate}&to=${defaultto.toLowerCase()}&FAQ=${faq}&logo=${isLogo}&locales=${language}&lang=${locale}' width='100%' height='350px' frameborder='0'></iframe>
    <script type='text/javascript' src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'></script>`
    imgContainer.style = `padding: 5px; margin: 5px;width:263px; height:42px`;
    imgContainer.innerHTML = theme === 'dark' ? svgDark : svgLight;
    
    widgetContainer.innerHTML = widgetHtmlString;
    widgetContainer.className = theme === 'dark' ? "dark" : "";
    logoContainer.appendChild(imgContainer);
    if(isButton){
      element.appendChild(logoContainer);
    }else{
      element.appendChild(widgetContainer);
    }
    
  }

  // This code ensures that the app doesn't run before the page is loaded.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement);
  } else {
    updateElement();
  }

  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions;

      updateElement();
    },
  }
})()
