// import trim from "lodash-es/trim";
// import fp from "lodash/fp";
import get from "../fp/get.js";
import compose from "../fp/compose.js";
import flow from "../fp/flow.js";
import toUpper from "../fp/toUpper.js";
import filter from "../fp/filter.js";
import map from "../fp/map.js";
import isEmpty from "../fp/isEmpty.js";
import negate from "../fp/negate.js";

export default function run() {
    ///////////////////////////////////////////////////////////////////////////////
    // Приклад каррірування функції
    ///////////////////////////////////////////////////////////////////////////////

    const data = {
        a: {
            b: 1
        }
    };

    // Прописуємо шлях до потібної властивості об'єкту
    const getB = get("a.b");

    // Функція тільки потрібен останній аргумент для виконання.
    console.log(getB(data)); // 1

    ///////////////////////////////////////////////////////////////////////////////
    // Приклад використання трубопроводів
    ///////////////////////////////////////////////////////////////////////////////
    const foo = num => num + 1;
    const bar = num => num * 4;
    const baz = num => num - 1;

    // Всі наступні функції еквівалентні
    const composeManually = data => foo(bar(baz(data)));
    const composeWithLodashCompose = compose(foo, bar, baz);
    const composeWithLodashFlow = flow(baz, bar, foo); // також трубопровід

    console.log(composeManually(2)); //5
    console.log(composeWithLodashCompose(2));
    console.log(composeWithLodashFlow(2));

    ///////////////////////////////////////////////////////////////////////////////
    // Приклади використання трубопроводів
    ///////////////////////////////////////////////////////////////////////////////
    const userToken = {
        user: {
            permissionList: [
                {
                    name: "serviceA",
                    enabled: true
                },
                {
                    name: "serviceB",
                    enabled: false
                },
                {
                    name: "serviceC",
                    enabled: true
                }
            ]
        }
    };

    const getEnabledPermissionList = flow(
        get("user.permissionList"),
        filter({ enabled: true }),
        map("name")
    );

    console.log(getEnabledPermissionList(userToken)); // ["serviceA", "serviceC"]

    // Ви також можете діставати всі частини вашої композиції
    const getUserPermissionList = get("user.permissionList");
    const keepEnabledPermissions = filter({ enabled: true });
    const mapNames = map("name");

    const getEnabledPermissionList2 = flow(
        getUserPermissionList,
        keepEnabledPermissions,
        mapNames
    );

    console.log(getEnabledPermissionList2(userToken)); // ["serviceA", "serviceC"]

    const capitalizeName = name => toUpper(name);
    const mapCapitalizeName = map(capitalizeName);

    const getUpperCasePermissionList = flow(
        getUserPermissionList,
        keepEnabledPermissions,
        mapNames,
        mapCapitalizeName
    );

    console.log(getUpperCasePermissionList(userToken)); // ["SERVICEA", "SERVICEC"]

    ///////////////////////////////////////////////////////////////////////////////
    // Приклад використання пошуку зворотнього результату
    ///////////////////////////////////////////////////////////////////////////////
    // const isEven = num => num % 2 == 0;
    // const isOdd = negate(isEven);
    // const isOddOldWay = num => !isEven(num);
    const hasAtLeastOne = negate(isEmpty);

    const hasAtLeastOneTruePermission = flow(
        getEnabledPermissionList, // використовує попередній метод:)
        hasAtLeastOne
    );

    console.log(hasAtLeastOneTruePermission(userToken));
    ///////////////////////////////////////////////////////////////////////////////
}
