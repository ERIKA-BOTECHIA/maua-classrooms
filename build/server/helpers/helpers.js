"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItems = void 0;
exports.switchParams = switchParams;
function switchParams(listParams) {
}
const ListItems = (list) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: 200,
                data: list.map((item, index) => ({ id: index + 1, title: item })),
                message: 'List fetched successfully'
            });
        }, 1000);
    });
};
exports.ListItems = ListItems;
//# sourceMappingURL=helpers.js.map