export abstract class Sorter {
	// BAD SOLUTION
	// constructor(public collection: number[] | string) {}

	// sort(): void {
	//   const { length } = this.collection;

	// 	for (let i = 0; i < length; i++) {
	// 		for (let j = 0; j < length - i - 1; j++) {

	//       // All of this only works if collection is number[]
	//       // if collection was an Array of numbers and you wanted to sort low to high
	//       // instanceof used for anything that has constructors i.e. Array, object, Date
	//       if (this.collection instanceof Array) {
	//         // if collection === number[]
	//         if (this.collection[j] > this.collection[j + 1]) {
	//           const leftHand = this.collection[j];
	//           this.collection[j] = this.collection[j + 1];
	//           this.collection[j + 1] = leftHand;
	//         }

	//       }

	//       // Only going to work if collection is a string
	//       // ~~logic to compare and swap characters in a string
	//       // typeof used for string, boolean, or number only
	//       if (typeof this.collection === 'string') {

	//       }
	// 		}
	//   }

	// }

	// GOOD SOLUTION

	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	abstract length: number;

	sort(): void {
		const { length } = this;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
