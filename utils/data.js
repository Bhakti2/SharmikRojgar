const companyLogs = [
"https://drive.google.com/uc?id=12hCwBuigtU4KwtciqDKysJYTFIfQ6d5-", "https://drive.google.com/uc?id=19XperuGInioYyJl-27ShVTFiGG3LQ84L", "https://drive.google.com/uc?id=1LVBbJdxUkh21GlucLkmgQjkOHS39R5py", "https://drive.google.com/uc?id=1MUEXINjPUxAySySvtFKWMPDYib-WfCcO", "https://drive.google.com/uc?id=1dmr6oLLUYDg1KVzxan9EzD-6DqqPBQBL", "https://drive.google.com/uc?id=1fG481YC-caCSZ81qukhc8XjyKVgKB8eD", "https://drive.google.com/uc?id=1tOViuMrx33zv0pssjDQsYmVDeOFew_z6", "https://drive.google.com/uc?id=1xG4--Gtxge924y3YsZt4wcTSn38BX-iK", "https://drive.google.com/uc?id=1xzzpjagWqotSAnCUfkhNxdB7CHI_PlAJ", "https://drive.google.com/uc?id=1yfrMwqA0y-p9b9MsxGFpq7A99V0jakCY"
]

const getRandomLogo = () => {
  return companyLogs[parseInt(Math.random() * 10)];
};

const avatar = [
"https://drive.google.com/uc?id=182oMw6kyoHXSpB8L8BDFMvsxMb1rhcGd", 
"https://drive.google.com/uc?id=190SV5ZbT4BNDw7VUaiXOQeDttRKQt-uI", "https://drive.google.com/uc?id=1Wmr00t-wDJH5SDlteq-VfopkJ9tVZoGg", "https://drive.google.com/uc?id=1XoxCmf7XPo1GCu1BVk_XH3tC_PRMC8Ph", "https://drive.google.com/uc?id=1azM9uWOhdIO5BieY9ruQGPx0Iwyjt3rI", "https://drive.google.com/uc?id=1bdvJJVLQuXxy7wspVnj9hnxg4EkJmil8", "https://drive.google.com/uc?id=1iiy46HlnHm-8_harSi5queiBq6Xyj4Vq", "https://drive.google.com/uc?id=1mK_buiGSxl2L7RpJD1-49aLT_Dsx6GkZ",
"https://drive.google.com/uc?id=1CYS_6HFPKl8lIxJubvHT6BHwX28LEV7w", "https://drive.google.com/uc?id=1alPdBSfHD-RhgzEmlxbXLYPMqI0PIrz3"
]

const random = [
"https://drive.google.com/uc?id=129Dqf9X9AQewY2rIrH5ohkVb74NRrRBT/", "https://drive.google.com/uc?id=16XeeeYA4gL6Yd9hkFA7SIQxdu9DJbH09/", "https://drive.google.com/uc?id=1G8nQoyW6K1J1uYx2UW2rrp53NTYxQ-mY/", "https://drive.google.com/uc?id=1HCyhlFqZyDgpEkknQhQwnaRD_govpqoF/", "https://drive.google.com/uc?id=1Oz2AsKjmNQP281JpQ7wWeI_3bd1toPrT/", "https://drive.google.com/uc?id=1XIM20B70Ci_ccm4KRVKKWEutNtfgPziO/", "https://drive.google.com/uc?id=1eW_mUrDATyl_to5ZJ6BNRd_ksSRHF5YZ/", "https://drive.google.com/uc?id=1kxLr7G1XzOUOsR-5Dy3nKAhULnU8CEd5/", "https://drive.google.com/uc?id=1lFjFf1vo8RxQ3A6dstGSzD3obe2R9ciQ/", "https://drive.google.com/uc?id=1ouY4gSw1dEJ5NDruetDT83rwQxFZcAVT/",
]

const getRandom = () => {
  return random[parseInt(Math.random() * 10)];
}

const getAvatar = () => {
  return avatar[parseInt(Math.random() * 10)]
}

exports.getRandomLogo = getRandomLogo;
exports.getAvatar = getAvatar;
exports.getRandom = getRandom;
