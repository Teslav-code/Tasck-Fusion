          //  Часть 1
          //  Рекурсивная функция возращающая объекты и массивы с обновлёнными ссылками на них
          const makeNewObject = (obj) => {

            const newObj = {};
            for (let item of Object.keys(obj)) {
              if (typeof obj[item] === "object") {
                newObj[item] = makeNewObject(obj[item]);
              } else {
                newObj[item] = obj[item];
              }
            }
            return newObj;
          };

          const o = {a:'a1', b:{ c: 'c1', g:{ g: 'g1'}}}
          const obj = makeNewObject(o)

          console.log(obj.b === o.b);

          //массив сравнения строк: результат ввиде массива true/false.
          function create(arr) {
            const compare = (str1, str2) => {
              return str1[0] == str2[0] && str1[-1] == str2[-1];
            };
            let finalArr = [];
            for (let i = 0; i <= arr.length - 2; i++) {
              let a = arr[1];
              let b = arr[i + 1];
              if (compare(a, b)) {
                finalArr.push("true");
              } else {
                finalArr.push("false");
              }
            }
            return finalArr;
          }
          console.log(create(["asd", "afffd", "cc", "kk"]));

          // спиральная матрица
          function spiralMatrix(n) {
            const arr = Array.from({ length: n }, () => []);
            let row = 0;
            let col = 0;
            let rowEnd = n - 1;
            let colEnd = n - 1;
            let counter = 1;

            while (col <= colEnd && row <= rowEnd) {
              
              // верхний ряд и среднее значение
              for (let i = col; i <= colEnd; i++) {
                arr[row][i] = counter;
                counter++;
              }
              row++;

              // конец колонки
              for (let i = row; i <= rowEnd; i++) {
                arr[i][colEnd] = counter;
                counter++;
              }

              colEnd--;

              //конец ряда
              for (let i = colEnd; i >= col; i--) {
                arr[rowEnd][i] = counter;
                counter++;
              }
              rowEnd--;

              // первый столбец с конца
              for (let i = rowEnd; i >= row; i--) {
                arr[i][col] = counter;
                counter++;
              }
              col++;
            }
            return arr;
          }
          console.log(spiralMatrix(3));

          /*---------------------------------------------------------------------------------------------------------------------*/

          // Часть 2

          // возведение числа в степень
          function power(base, exponent) {
            if (exponent == 0) return 1;
            else return base * power(base, exponent - 1);
          }
          console.log(power(5, 4));

          //  преобразование нескольких объеденнёных массивов в один
          const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
          function flatDeep(arr, d = 1) {
            return d > 0
              ? arr.reduce(
                  (acc, val) =>
                    acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
                  []
                )
              : arr.slice();
          }

          console.log(flatDeep(arr, Infinity));

          // текстовый эквивалент числа
          let firstNumber = [
            "",
            " один",
            " два",
            " три",
            " четыре",
            " пять",
            " шесть",
            " семь",
            " восемь",
            " девять",
          ];
          let secondNumber = [
            "",
            "десять",
            " двадцать",
            " тридцать",
            " сорок",
            " пятьдесят",
            " шестьдесят",
            " семьдесят",
            " восемьдесят",
            " девяносто",
          ];
          let thirdNumber = [
            "",
            "сто",
            " двести",
            " триста",
            " четыреста",
            " пятьсот",
            " шестьсот",
            " семьсот ",
            " восемьсот ",
            " девятьсот",
            "",
          ];
          let anyNumber = [
            "десять",
            " одиннадцать ",
            " двенадцать ",
            " тринадцать ",
            " четырнадцать ",
            " пятнадцать ",
            " шестнадцать ",
            " семьнадцать ",
            " восемьнадцать ",
            " девятнадцать ",
            "",
          ];

          function stringWriter(target) {
            let targetNumber = String(target).split("").reverse();
            let stringInteger = "";
            let thousand = "";
            let exceptions = ["2", "3", "4"];

            if (targetNumber[3] === "1" && targetNumber[4] !== "1") {
              thousand = " тысяча ";
            } else if (
              exceptions.includes(targetNumber[3]) &&
              targetNumber[4] !== "1"
            ) {
              thousand = " тысячи ";
            } else {
              thousand = " тысяч ";
            }

            if (targetNumber.length > 3) {
              stringInteger += thirdNumber[targetNumber[5]] || "";

              if (targetNumber[4] === "1") {
                stringInteger += anyNumber[targetNumber[3]] + thousand || "";
              } else if (targetNumber[3] === "1") {
                stringInteger += secondNumber[targetNumber[4]] || "";

                stringInteger += " одна " + thousand || "";
              } else if (targetNumber[3] === "2") {
                stringInteger += secondNumber[targetNumber[4]] || "";

                stringInteger += " две " + thousand || "";
              } else {
                stringInteger += secondNumber[targetNumber[4]] || "";

                stringInteger += firstNumber[targetNumber[3]] + thousand || "";
              }
            }

            stringInteger += thirdNumber[targetNumber[2]] || "";

            if (targetNumber[1] === "1") {
              stringInteger += anyNumber[targetNumber[0]] || "";
            } else {
              stringInteger += secondNumber[targetNumber[1]] || "";

              stringInteger += firstNumber[targetNumber[0]] || "";
            }

            console.log(target + " : " + stringInteger);
          }

          stringWriter(5);
          stringWriter(10);
          stringWriter(127);
          stringWriter(1595);
          stringWriter(10561);
          stringWriter(110689);
          stringWriter(500860);
          stringWriter(999999);