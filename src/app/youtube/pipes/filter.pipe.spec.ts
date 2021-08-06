import { FilterPipe } from './filter.pipe';

describe('FilterByPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
