import { ITimeInterval } from "../../typings/types";

export const historyData: ITimeInterval[] = [
    {
        id: 1,
        events: [
            {
                id: 11,
                year: 1988,
                body: "test 1988"
            },
            {
                id: 12,
                year: 1989,
                body: "test 1989"
            },
            {
                id: 13,
                year: 1990,
                body: "test 1990"
            },
            {
                id: 14,
                year: 1987,
                body: "test 1987"
            },
            {
                id: 15,
                year: 1990,
                body: "test 1990"
            },
        ],
        years: [1987, 1990],
        category: "Кино"
    },
    {
        id: 2,
        events: [
            {
                id: 21,
                year: 1998,
                body: "test 1998"
            },
            {
                id: 22,
                year: 1999,
                body: "test 1999"
            },
            {
                id: 23,
                year: 1992,
                body: "test 1992"
            },
            {
                id: 24,
                year: 1993,
                body: "test 1993"
            },
            {
                id: 25,
                year: 2000,
                body: "test 2000"
            },
        ],
        years: [1992, 2005],
        category: "Наука"
    },
    {
        id: 3,
        events: [
            {
                id: 31,
                year: 2006,
                body: "test 2006"
            },
            {
                id: 32,
                year: 2008,
                body: "test 2008"
            },
            {
                id: 33,
                year: 2010,
                body: "test 2010"
            },
            {
                id: 34,
                year: 2007,
                body: "test 2007"
            },
            {
                id: 35,
                year: 2015,
                body: "test 2015"
            },
        ],
        years: [2006, 2015],
        category: "Литература"
    }
]