export const SETTING_TYPES = {
  AD_DETECT: "AD_DETECT",
  RETURN_CHANNEL: "RETURN_CHANNEL",
};

export const SETTING_CAMEL_TYPES = {
  [SETTING_TYPES.AD_DETECT]: "isAdDetect",
  [SETTING_TYPES.RETURN_CHANNEL]: "isReturnChannel",
};

export const SETTING_TITLES = {
  [SETTING_TYPES.AD_DETECT]: "광고 감지",
  [SETTING_TYPES.RETURN_CHANNEL]: "기존 채널로 이동",
};

export const SETTING_EXPLANATIONS = {
  [SETTING_TYPES.AD_DETECT]: [
    "현재 채널에서 광고를 자동으로 감지합니다.",
    "광고가 감지되면 다른 채널로 이동합니다.",
  ],
  [SETTING_TYPES.RETURN_CHANNEL]: [
    "이전 채널의 광고가 종료되면",
    "자동으로 복귀합니다.",
  ],
};
