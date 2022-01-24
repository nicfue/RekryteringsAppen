import { Pipe, PipeTransform } from '@angular/core';
import { Candidate } from 'src/app/models/candidate.model';

@Pipe({
  name: 'filter'
})

export class CandidatesFilterPipe implements PipeTransform {
  transform(
    candidates: Candidate[],
    searchString: string
  ): Candidate[] {
    if (candidates.length === 0 || searchString === '') {
      return candidates;
    }

    return candidates.filter((prop: Candidate) => this.findMatch(prop, searchString));
  }

  findMatch(prop: Candidate, searchString: string): boolean | RegExpExecArray | null {
    const regex = new RegExp(searchString, 'gi');
    return (regex.exec(prop['firstName']) || regex.exec(prop['lastName']));
  }
}
