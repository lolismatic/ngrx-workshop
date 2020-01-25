import { createAction, props } from '@ngrx/store';

import { User } from '../../models';

export const update = createAction('[settings] Update', props<{user: User}>());
