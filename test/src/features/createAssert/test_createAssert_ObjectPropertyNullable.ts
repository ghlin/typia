import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createAssert_ObjectPropertyNullable = _test_assert(
  "ObjectPropertyNullable",
)<ObjectPropertyNullable>(ObjectPropertyNullable)(
  typia.createAssert<ObjectPropertyNullable>(),
);
