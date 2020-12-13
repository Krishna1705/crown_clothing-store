
import {createSelector} from 'reselect';

const selectDirectory=state=>state.directory;// focus on root reducer

export const selectDirectorySections=createSelector(
                                      [selectDirectory],
                                      (directory)=>directory.sections)//focus on directory reducer