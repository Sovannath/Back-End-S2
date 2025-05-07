
import Duration from "../model/Duration.js";
import RaceResult from "../model/RaceResult.js";
import fs from "fs";

/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
  /**
   * The list of race results.
   * @type {Array<RaceResult>}
   * @private
   */
  _raceResults = [];

  get raceResults() {
    return this._raceResults;
  }

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    fs.writeFileSync('data.json', JSON.stringify(filePath, null, 2));
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      this._raceResults = JSON.parse(data)
    }
    catch (err) {
      console.error("Error reading file:", err);
      return false;
    }
    return true;
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
       // TODO
    for (let i = 0; i < this._raceResults.length; i++) {
      if (this._raceResults[i]._participantId === participantId && this._raceResults[i]._sport === sport) {
        return this._raceResults[i]._time;
      }
    }
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    let totalTime = new Duration(0, 0); // Initialize total time to 0
    let found = false;
  
    for (let i = 0; i < this._raceResults.length; i++) {
      if (this._raceResults[i]._participantId === participantId) {
        totalTime = totalTime.plus(this._raceResults[i]._time);
        found = true;
      }
    }
  
    return found ? totalTime : null;
  }
}

export default RaceResultsService;