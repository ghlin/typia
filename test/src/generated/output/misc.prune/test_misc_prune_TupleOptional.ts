import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TupleOptional } from "../../../structures/TupleOptional";

export const test_misc_prune_TupleOptional = _test_misc_prune(
  "TupleOptional",
)<TupleOptional>(TupleOptional)((input) =>
  ((input: TupleOptional): void => {})(input),
);
