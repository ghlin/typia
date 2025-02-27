import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createAssertGuardEquals_ObjectSimple =
  _test_assertGuardEquals("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    typia.createAssertGuardEquals<ObjectSimple>(),
  );
