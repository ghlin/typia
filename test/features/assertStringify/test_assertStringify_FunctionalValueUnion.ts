import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_FunctionalValueUnion = _test_assertStringify(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) => typia.assertStringify(input),
    FunctionalValueUnion.SPOILERS,
);