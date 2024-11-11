// Napisz kod, który oblicza sumę wszystkich liczb parzystych od 1 do 100 (włącznie) korzystając z pętli for. Po obliczeniu sumy, wyświetl wynik w konsoli.

// let suma = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     suma += i;
//   }
// }

// console.log(`suma to ${suma}`);

// Napisz kod, który generuje i wyświetla w konsoli trójkąt prostokątny o wysokości "h" składający się z gwiazdek (*). Użyj pętli for do iteracji po kolejnych poziomach trójkąta, a następnie pętli for do generowania odpowiedniej liczby gwiazdek w każdym poziomie (wydrukuj w konsoli). Przyjmij wartość h równą 6.

// let h = 6;
// for (let i = 1; i <= h; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// Napisz kod, który oblicza ilość liczb podzielnych przez 3 (nie zwracają reszty) w zakresie od 1 do 50 (włącznie) korzystając z pętli while. Po obliczeniu ilości liczb, wyświetl wynik w konsoli.

// let counter = 0; //będzie zwiększany w pętli
// let i = 1; //dla inicjalizacji pierwszej wartości, która wyniesie 1

// while (i <= 50) {
//   if (i % 3 === 0) {
//     counter++;
//   }
//   i++;
// }

// console.log(
//   "Ilość liczb podzielnych przez 3 w zakresie od 1 do 50 wynosi:",
//   counter
// );

// Zadanie 1: Obliczanie średniej

// Zadeklaruj funkcję o nazwie "calculateAverage", która przyjmuje tablicę liczb jako argument i zwraca średnią arytmetyczną tych liczb. Wykorzystaj pętlę for do obliczenia sumy liczb, a następnie podziel tę sumę przez długość tablicy.

// Przykład użycia: calculateAverage([1, 2, 3, 4, 5]); // zwraca 3

// function calculateAverage(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum / numbers.length);
//   return sum / numbers.length;
// }
// console.log(calculateAverage([1, 2, 3, 4, 5]));
// Zadanie 2: Filtracja liczb parzystych

// Zadeklaruj funkcję o nazwie "filterEvenNumbers", która przyjmuje tablicę liczb jako argument i zwraca nową tablicę zawierającą tylko liczby parzyste. Wykorzystaj pętlę for do iteracji po elementach tablicy oraz instrukcje warunkowe do sprawdzenia, czy liczba jest parzysta.

// Przykład użycia: filterEvenNumbers([1, 2, 3, 4, 5, 6]); // zwraca [2, 4, 6]

// function filterEvenNumbers(numbers) {
//   const evenNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   return evenNumbers;
// }

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Zadanie 3: Liczba wystąpień elementu w tablicy

// Stwórz funkcję "countOccurrences" za pomocą przypisania funkcji anonimowej do zmiennej, która przyjmuje dwa argumenty: tablicę "array" oraz wartość "element". Funkcja powinna zwracać liczbę wystąpień "element" w tablicy "array". Wykorzystaj pętlę for do iteracji po elementach tablicy oraz instrukcje warunkowe do sprawdzenia, czy element tablicy zgadza się z podaną wartością.

// Przykład użycia: countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana"); // zwraca 2

// const countOccurrences = function (array, element) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//       count += 1;
//     }
//   }
//   return count;
// };
// console.log(
//   countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana")
// );
