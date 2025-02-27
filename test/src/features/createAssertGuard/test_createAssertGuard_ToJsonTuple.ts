import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createAssertGuard_ToJsonTuple = _test_assertGuard(
  "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)(typia.createAssertGuard<ToJsonTuple>());
