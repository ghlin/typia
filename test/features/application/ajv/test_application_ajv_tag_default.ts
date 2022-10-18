import TSON from "../../../../src";
import { TagDefault } from "../../../structures/TagDefault";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_tag_format = _test_application_ajv(
    "format tag",
    TSON.application<[TagDefault], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/TagDefault",
            },
        ],
        components: {
            schemas: {
                TagDefault: {
                    $id: "components#/schemas/TagDefault",
                    type: "object",
                    properties: {
                        boolean: {
                            type: "boolean",
                            nullable: false,
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "false",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            default: true,
                        },
                        number: {
                            type: "number",
                            nullable: false,
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "1",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            default: 1,
                        },
                        string: {
                            type: "string",
                            nullable: false,
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "two",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            default: "two",
                        },
                        text: {
                            type: "string",
                            nullable: false,
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "Very long text, can you understand it?",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            default: "Very long text, can you understand it?",
                        },
                        template: {
                            type: "string",
                            nullable: false,
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "prefix_A",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            pattern: "^(prefix_(.*))",
                            default: "prefix_A",
                        },
                        boolean_and_number_and_string: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    default: "two",
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    default: 1,
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    default: true,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "false",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "1",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "two",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                        },
                        union_but_boolean: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    default: true,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "false",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                        },
                        union_but_number: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    default: 1,
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "1",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                        },
                        union_but_string: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    default: "two",
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "two",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                        },
                        vulnerable_range: {
                            type: "number",
                            nullable: false,
                            "x-tson-metaTags": [
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                                {
                                    kind: "maximum",
                                    value: 5,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "minimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "maximum",
                                    text: [
                                        {
                                            text: "5",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minimum: 3,
                            maximum: 5,
                        },
                        vulnerable_template: {
                            type: "string",
                            nullable: false,
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "two",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            pattern: "^(prefix_(.*))",
                        },
                        boolean_and_number_and_template: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "prefix_B",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    pattern:
                                        "^(-?\\d+\\.?\\d*|true|false|(prefix_(.*)))",
                                    default: "prefix_B",
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "prefix_B",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    default: 1,
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "prefix_B",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    default: true,
                                },
                            ],
                            "x-tson-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "false",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "1",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "prefix_B",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: [
                        "boolean",
                        "number",
                        "string",
                        "text",
                        "template",
                        "boolean_and_number_and_string",
                        "union_but_boolean",
                        "union_but_number",
                        "union_but_string",
                        "vulnerable_range",
                        "vulnerable_template",
                        "boolean_and_number_and_template",
                    ],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
