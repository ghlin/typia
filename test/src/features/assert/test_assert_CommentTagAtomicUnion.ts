import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_assert_CommentTagAtomicUnion = _test_assert(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
  typia.assert<CommentTagAtomicUnion>(input),
);
