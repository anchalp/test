const {
    defineConfig
} = require("cypress");

module.exports = defineConfig({
    projectId: "trengo",
    e2e: {
        baseUrl: 'https://app.trengo.com/',
    },
    env: {
        logintoken: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDMxMzUxNDI4MGVkY2M3OTA4OGE1Yzc5MzgxNzU4ODAzZWIzNmFkNTE2NGM1YmU5YzkwNzViMTUwNzQ4NmExNDQ5NDRmNWI1OTg2OGQ2MzAiLCJpYXQiOjE2NjkzMTQ1NzcuNTc4NTM3LCJuYmYiOjE2NjkzMTQ1NzcuNTc4NTM5LCJleHAiOjE3MDA4NTA1NzcuNTY3MDc3LCJzdWIiOiI1OTY4NzkiLCJzY29wZXMiOltdfQ.N0ivDbt7SVqny-oIuyGordhWOuGxA0tWt3SC-N_M1hzHBLOjgDGfLEjCTJYja-4jLrFimzaIUoTe4so3VgqbAQ'
    }
});
