import { ChatGPTUnofficialProxyAPI } from "chatgpt";
import dotenv from "dotenv";
dotenv.config();
let tries = 0;
async function main() {
  const api = new ChatGPTUnofficialProxyAPI({
    accessToken: process.env.OPENAI_ACCESS_TOKEN,
    apiReverseProxyUrl: "https://ai.fakeopen.com/api/conversation",
    completionParams: {
      model: "gpt-3.5-turbo",
      temperature: 0.5,
      top_p: 0.8,
    },
  });

  try {
    const res = await api.sendMessage("Hello World!");
    console.log(res.text);
  } catch (err) {
    if (tries === 10) return;
    console.log(err.statusText, `Try: ${tries}`);
    setTimeout(() => {
      main();
    }, 3000);
    tries += 1;
  }
}

main();
