import openai from "./config/open-ai.js";

async function main() {
  const chatCompletion = await openai.createChatCompletion({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  });
  console.log(chatCompletion);
}

main();
