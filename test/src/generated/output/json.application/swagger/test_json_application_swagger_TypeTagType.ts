import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagType } from "../../../../structures/TypeTagType";

export const test_json_application_swagger_TypeTagType = _test_json_application(
  "swagger",
)("TypeTagType")({
  schemas: [
    {
      $ref: "#/components/schemas/TypeTagType",
    },
  ],
  components: {
    schemas: {
      TypeTagType: {
        type: "object",
        properties: {
          value: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              $ref: "#/components/schemas/TypeTagType.Type",
            },
          },
        },
        nullable: false,
        required: ["value"],
        "x-typia-jsDocTags": [],
      },
      "TypeTagType.Type": {
        type: "object",
        properties: {
          int: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "integer",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"int32">',
                kind: "type",
                value: "int32",
                validate:
                  "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                exclusive: true,
              },
            ],
          },
          uint: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "integer",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"uint32">',
                kind: "type",
                value: "uint32",
                validate:
                  "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                exclusive: true,
              },
            ],
          },
          int32: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "integer",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"int32">',
                kind: "type",
                value: "int32",
                validate:
                  "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                exclusive: true,
              },
            ],
          },
          uint32: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "integer",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"uint32">',
                kind: "type",
                value: "uint32",
                validate:
                  "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                exclusive: true,
              },
            ],
          },
          int64: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "integer",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"int64">',
                kind: "type",
                value: "int64",
                validate:
                  "Math.floor($input) === $input && -9223372036854775808 <= $input && $input <= 9223372036854775807",
                exclusive: true,
              },
            ],
          },
          uint64: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "integer",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"uint64">',
                kind: "type",
                value: "uint64",
                validate:
                  "Math.floor($input) === $input && 0 <= $input && $input <= 18446744073709551615",
                exclusive: true,
              },
            ],
          },
          float: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
            "x-typia-typeTags": [
              {
                target: "number",
                name: 'Type<"float">',
                kind: "type",
                value: "float",
                validate: "-1.175494351e38 <= $input && $input <= 3.4028235e38",
                exclusive: true,
              },
            ],
          },
        },
        nullable: false,
        required: [
          "int",
          "uint",
          "int32",
          "uint32",
          "int64",
          "uint64",
          "float",
        ],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "swagger",
});
