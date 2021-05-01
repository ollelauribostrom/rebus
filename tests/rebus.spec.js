import {
  getRebuses,
  isRebusAnswered,
  markRebusAsAnswered,
  getRandomUnansweredRebusId
} from '../src/js/rebuses';

describe('Tests for rebuses', () => {
  describe('getRebuses', () => {
    it('generates a correct array of rebuses', () => {
      const storage = jest.spyOn(Storage.prototype, 'getItem');
      storage.mockImplementation(() => JSON.stringify([]));
      getRebuses().forEach(rebus => {
        expect(typeof rebus.id).toEqual('number');
        expect(typeof rebus.symbols[0]).toEqual('string');
        expect(typeof rebus.words[0]).toEqual('string');
        expect(rebus.input.length).toEqual(rebus.words.join('').length);
        expect(rebus.isAnswered).toEqual(false);
      });
      storage.mockRestore();
    });
    it('correctly restores answered rebuses', () => {
      const storage = jest.spyOn(Storage.prototype, 'getItem');
      storage.mockImplementation(() => JSON.stringify([1]));
      const [rebus] = getRebuses();
      expect(rebus.id).toEqual(1);
      expect(rebus.isAnswered).toEqual(true);
      expect(rebus.input).toEqual(['R', 'e', 'b', 'u', 's']);
      storage.mockRestore();
    });
  });
  describe('isRebusAnswered', () => {
    it('returns true if the provided id has been marked as answered in localStorage', () => {
      const storage = jest.spyOn(Storage.prototype, 'getItem');
      storage.mockImplementation(() => JSON.stringify([1]));
      expect(isRebusAnswered(1)).toEqual(true);
      expect(storage).toHaveBeenCalledWith('answeredRebuses');
      expect(storage).toHaveBeenCalledTimes(1);
      storage.mockRestore();
    });
    it('returns false if the provided id has not been marked as answered in localStorage', () => {
      const storage = jest.spyOn(Storage.prototype, 'getItem');
      storage.mockImplementation(() => JSON.stringify([1]));
      expect(isRebusAnswered(2)).toEqual(false);
      storage.mockRestore();
    });
    it('returns false if the key answeredRebuses has not yet been set in localStorage', () => {
      const storage = jest.spyOn(Storage.prototype, 'getItem');
      storage.mockImplementation(() => null);
      expect(isRebusAnswered(2)).toEqual(false);
      storage.mockRestore();
    });
  });
  describe('markRebusAsAnswered', () => {
    it('saves the provided rebus id to localStorage', () => {
      const storage = {};
      const getItem = jest.spyOn(Storage.prototype, 'getItem');
      const setItem = jest.spyOn(Storage.prototype, 'setItem');
      getItem.mockImplementation(key => storage[key]);
      setItem.mockImplementation((key, value) => Object.assign(storage, { [key]: value }));
      markRebusAsAnswered(1);
      markRebusAsAnswered(2);
      expect(storage.answeredRebuses).toEqual('[1,2]');
    });
  });
  describe('checkForRebusDuplicates', () => {
    it('checks for duplicate rebuses', () => {
      const rebuses = getRebuses();
      const duplicates = [];
      rebuses.forEach(rebus => {
        rebuses.forEach(potentialDuplicate => {
          if (rebus !== potentialDuplicate && !duplicates.includes(rebus)) {
            if (
              rebus.words.toString().toLowerCase() ===
              potentialDuplicate.words.toString().toLowerCase()
            ) {
              duplicates.push(potentialDuplicate);
            }
          }
        });
      });
      expect(duplicates).toEqual([]);
    });
  });
  describe('getRandomUnansweredRebus', () => {
    it('get an random rebus', () => {
      const mockedUserInteractedRebuses = [
        {
          symbols: ['Re', '+', '🚌'],
          words: ['Rebus'],
          hint: 'You´re solving one right now',
          isAnswered: true,
          id: 0
        },
        {
          symbols: ['🏠', '+', 'pl', '+', '🐜', '+', 's'],
          words: ['Houseplants'],
          hint: `The second emoji is 'ant' not 'bug'`,
          isAnswered: false,
          id: 1
        },
        {
          symbols: ['📖', '+', '🙋', '+', '📝'],
          words: ['Readme', 'file'],
          hint: 'The default markdown file of every GitHub repo',
          isAnswered: false,
          id: 2
        }
      ];
      const mockedUserInteractedRebusesAnsweredCompletely = [
        {
          symbols: ['Re', '+', '🚌'],
          words: ['Rebus'],
          hint: 'You´re solving one right now',
          isAnswered: true,
          id: 0
        },
        {
          symbols: ['🏠', '+', 'pl', '+', '🐜', '+', 's'],
          words: ['Houseplants'],
          hint: `The second emoji is 'ant' not 'bug'`,
          isAnswered: true,
          id: 1
        },
        {
          symbols: ['📖', '+', '🙋', '+', '📝'],
          words: ['Readme', 'file'],
          hint: 'The default markdown file of every GitHub repo',
          isAnswered: true,
          id: 2
        }
      ];
      const mockMath = Object.create(global.Math);
      mockMath.random = () => 0;
      global.Math = mockMath;
      const randomlyPickedUnansweredRebusId = getRandomUnansweredRebusId(
        mockedUserInteractedRebuses
      );
      expect(randomlyPickedUnansweredRebusId).toBe(1);
      const randomlyPickedUnansweredRebusIdWithCompletlyAnswered = getRandomUnansweredRebusId(
        mockedUserInteractedRebusesAnsweredCompletely
      );
      expect(randomlyPickedUnansweredRebusIdWithCompletlyAnswered).toBe(0);
    });
  });
});
