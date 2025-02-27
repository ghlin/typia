import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagLength } from "../../../../structures/CommentTagLength";

export const test_json_application_ajv_CommentTagLength =
  _test_json_application("ajv")("CommentTagLength")({
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagLength",
      },
    ],
    components: {
      schemas: {
        CommentTagLength: {
          $id: "#/components/schemas/CommentTagLength",
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/CommentTagLength.Type",
              },
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "CommentTagLength.Type": {
          $id: "#/components/schemas/CommentTagLength.Type",
          type: "object",
          properties: {
            fixed: {
              "x-typia-jsDocTags": [
                {
                  name: "length",
                  text: [
                    {
                      text: "5",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              maxLength: 5,
              minLength: 5,
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: "MinLength<5>",
                  kind: "minLength",
                  value: 5,
                  validate: "5 <= $input.length",
                  exclusive: true,
                },
                {
                  target: "string",
                  name: "MaxLength<5>",
                  kind: "maxLength",
                  value: 5,
                  validate: "$input.length <= 5",
                  exclusive: true,
                },
              ],
            },
            minimum: {
              "x-typia-jsDocTags": [
                {
                  name: "minLength",
                  text: [
                    {
                      text: "3",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              minLength: 3,
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: "MinLength<3>",
                  kind: "minLength",
                  value: 3,
                  validate: "3 <= $input.length",
                  exclusive: true,
                },
              ],
            },
            maximum: {
              "x-typia-jsDocTags": [
                {
                  name: "maxLength",
                  text: [
                    {
                      text: "7",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              maxLength: 7,
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: "MaxLength<7>",
                  kind: "maxLength",
                  value: 7,
                  validate: "$input.length <= 7",
                  exclusive: true,
                },
              ],
            },
            minimum_and_maximum: {
              "x-typia-jsDocTags": [
                {
                  name: "minLength",
                  text: [
                    {
                      text: "3",
                      kind: "text",
                    },
                  ],
                },
                {
                  name: "maxLength",
                  text: [
                    {
                      text: "7",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              maxLength: 7,
              minLength: 3,
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: "MinLength<3>",
                  kind: "minLength",
                  value: 3,
                  validate: "3 <= $input.length",
                  exclusive: true,
                },
                {
                  target: "string",
                  name: "MaxLength<7>",
                  kind: "maxLength",
                  value: 7,
                  validate: "$input.length <= 7",
                  exclusive: true,
                },
              ],
            },
            equal: {
              "x-typia-jsDocTags": [
                {
                  name: "minLength",
                  text: [
                    {
                      text: "10",
                      kind: "text",
                    },
                  ],
                },
                {
                  name: "maxLength",
                  text: [
                    {
                      text: "19",
                      kind: "text",
                    },
                  ],
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              maxLength: 19,
              minLength: 10,
              "x-typia-typeTags": [
                {
                  target: "string",
                  name: "MinLength<10>",
                  kind: "minLength",
                  value: 10,
                  validate: "10 <= $input.length",
                  exclusive: true,
                },
                {
                  target: "string",
                  name: "MaxLength<19>",
                  kind: "maxLength",
                  value: 19,
                  validate: "$input.length <= 19",
                  exclusive: true,
                },
              ],
            },
          },
          required: [
            "fixed",
            "minimum",
            "maximum",
            "minimum_and_maximum",
            "equal",
          ],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
