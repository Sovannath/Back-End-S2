
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
     static raceResults = [];
     
     constructor(participantId, sport, time) {
          this._participantId = participantId;
          this._sport = sport;
          this._time = time;
          // RaceResult.raceResults.push(this);
     }

     static getAllResults() {
          return RaceResult.raceResults;
     }
  }

export default RaceResult;