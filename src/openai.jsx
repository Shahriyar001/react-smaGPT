// const { Configuration, OpenAiApi } = require("openai");
// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

// export async function sendMsgToOpenAi(message) {
//   const res = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: message,
//     temperature: 0.7,
//     max_token: 256,
//     top_p: 1,
//     frequency_penalty: 0,
//     presense_penalty: 0,
//   });
//   return res.data.choices[0].text;
// }

const { Configuration, OpenAiApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAiApi(configuration);

export async function sendMsgToOpenAi(message) {
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.7,
    max_token: 256,
    top_p: 1,
    frequency_penalty: 0,
    presense_penalty: 0,
  });
  return res.data.choices[0].text;
}
