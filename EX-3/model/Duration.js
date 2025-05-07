

//  TODO - Copy from exercice 1

class Duration {

    constructor(seconds = 0) {
       // YOUR CODE
        this._totalSeconds = seconds;
    }
  
  
    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
       // YOUR CODE
        let totalSeconds = (minutes * 60) + seconds;
        return new Duration(totalSeconds);
        
    }
  
  
    plus = (other) => {
           // YOUR CODE
        let newTotalSeconds = this._totalSeconds + other._totalSeconds;
        return new Duration(newTotalSeconds);
    };
  
    // YOUR COMMENT
    minus = (other) => {
           // YOUR CODE
        const newTotalSeconds = this._totalSeconds - other._totalSeconds;
        return new Duration(newTotalSeconds);
    };
  
  
    toString = () => {
          // YOUR CODE
        const minutes = Math.floor(this._totalSeconds / 60);
        const seconds = this._totalSeconds % 60;
  
        return `${minutes}m ${seconds}s`;
  
    };
  }
  
export default Duration;
  