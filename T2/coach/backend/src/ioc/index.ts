import 'reflect-metadata';
import { Container } from 'inversify';

import CoachController from '@modules/coach/controller';
import { TYPES } from '@ioc/types';
import SubjectController from '@modules/subject/controller';

const container = new Container();
container.bind<CoachController>(TYPES.CoachController).to(CoachController);
container.bind<SubjectController>(TYPES.SubjectController).to(SubjectController);

export default container;