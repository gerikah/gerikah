import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error("Set OPENAI_API_KEY before running this script.");
}

const openai = new OpenAI({ apiKey });

const response = await openai.responses.create({
  model: process.env.OPENAI_MODEL || "gpt-5",
  input: "Write a haiku about AI.",
  store: true,
});

console.log(response.output_text);
