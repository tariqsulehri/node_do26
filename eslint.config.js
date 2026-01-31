import globals from "globals";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            sourceType: "module",
            ecmaVersion: 2022,
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error",
            "semi": ["error", "always"],
        },
        ignores: ["node_modules/", "coverage/"],
    },
];
