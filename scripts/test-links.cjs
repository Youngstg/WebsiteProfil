const https = require('https');
const http = require('http');

const urls = [
  'https://huggingface.co/spaces/Luckystg/SIBI_Recognition_VideoMAE-demo',
  'https://github.com/Youngstg/SIBI-Classification-VideoMAE',
  'https://www.km-itera.com',
  'https://kosmatch.us.ci',
  'https://github.com/Youngstg/KosMatch',
  'https://carecircle.us.ci',
  'https://github.com/Youngstg/CareCircle',
  'https://cutesnaps.us.ci',
  'https://github.com/Youngstg/Photobooth',
  'https://digo.us.ci',
  'https://github.com/Youngstg/Digo-Chatbot',
  'https://allaround-woad.vercel.app',
  'https://github.com/Youngstg/Allaround',
  'https://github.com/Youngstg/UnfollowerChecker',
  'https://github.com/Youngstg/EDA-Breast-Cancer',
  'https://colab.research.google.com/github/Youngstg/EDA-Breast-Cancer/blob/main/EDA_Breast_Cancer_Portfolio.ipynb',
  'https://github.com/Youngstg',
  'https://linkedin.com/in/luckyimmanuel'
];

async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(6000) });
    console.log(res.status, url);
  } catch (err) {
    try {
      const getRes = await fetch(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(6000) });
      console.log(getRes.status, url);
    } catch (e) {
      console.log('FAIL:', e.message, url);
    }
  }
}

async function run() {
  for (const u of urls) {
    await checkUrl(u);
  }
}

run();

