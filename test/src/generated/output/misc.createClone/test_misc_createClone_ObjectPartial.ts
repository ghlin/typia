import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_misc_createClone_ObjectPartial = _test_misc_clone(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)(
  (input: ObjectPartial): typia.Resolved<ObjectPartial> => {
    const $io1 = (input: any): boolean =>
      "boolean" === typeof input.boolean &&
      "number" === typeof input.number &&
      "string" === typeof input.string &&
      Array.isArray(input.array) &&
      input.array.every((elem: any) => "number" === typeof elem) &&
      (null === input.object ||
        ("object" === typeof input.object &&
          null !== input.object &&
          $io1(input.object)));
    const $cp0 = (input: any) => input.map((elem: any) => elem as any);
    const $co0 = (input: any): any => ({
      boolean: input.boolean as any,
      number: input.number as any,
      string: input.string as any,
      array: Array.isArray(input.array)
        ? $cp0(input.array)
        : (input.array as any),
      object:
        "object" === typeof input.object && null !== input.object
          ? $co1(input.object)
          : (input.object as any),
    });
    const $co1 = (input: any): any => ({
      boolean: input.boolean as any,
      number: input.number as any,
      string: input.string as any,
      array: Array.isArray(input.array)
        ? $cp0(input.array)
        : (input.array as any),
      object:
        "object" === typeof input.object && null !== input.object
          ? $co1(input.object)
          : (input.object as any),
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  },
);
