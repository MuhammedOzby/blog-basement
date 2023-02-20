export async function getContent(path: string) {
  const getContent = await fetch(
    `https://raw.githubusercontent.com/MuhammedOzby/muhammedozby.github.io/main/yazilar/${path}/icerik.md`
  ).then((data) => data.text());
  return getContent;
}
