export const configurationFields = {
    udpPort: "",
    tcpPort: "",
    maxConnections: "",
    lanDiscovery: "",
    registerToLobby: "",
    configVersion: ""
}

export const settingsFields = {
    serverName: "",
    adminPassword: "",
    carGroup: "FreeForAll",
    trackMedalsRequirement: "",
    safetyRatingRequirement: "",
    racecraftRatingRequirement: -1,
    password: "",
    spectatorPassword: "",
    maxCarSlots: 30,
    dumpLeaderboards: 0,
    isRaceLocked: 1,
    randomizeTrackWhenEmpty: 0,
    centralEntryListPath: "",
    allowAutoDQ: 1,
    shortFormationLap: 0,
    dumpEntryList: 0,
    formationLapType: "3"
}

export const assistFields = {
    stabilityControlLevelMax: 25,
    disableAutosteer: 1,
    disableAutoLights: 0,
    disableAutoWiper: 0,
    disableAutoEngineStart: 0,
    disableAutoPitLimiter: 0,
    disableAutoGear: 0,
    disableAutoClutch: 0,
    disableIdealLine: 1
}

export const sessionFields = {
    hourOfDay: 10,
    dayOfWeekend: 1,
    timeMultiplier: 1,
    sessionType: "P",
    sessionDurationMinutes: 20
}

export const eventFields = {
    track: "spa",
    preRaceWaitingTimeSeconds: 60,
    sessionOverTimeSeconds: 120,
    ambientTemp: 26,
    cloudLevel: 0,
    rain: 0,
    weatherRandomness: 0,
    configVersion: 1,
    sessions: [
        {
            "hourOfDay": 10,
            "dayOfWeekend": 1,
            "timeMultiplier": 1,
            "sessionType": "P",
            "sessionDurationMinutes": 20
          },
          {
            "hourOfDay": 17,
            "dayOfWeekend": 2,
            "timeMultiplier": 8,
            "sessionType": "Q",
            "sessionDurationMinutes": 10
          },
          {
            "hourOfDay": 16,
            "dayOfWeekend": 3,
            "timeMultiplier": 3,
            "sessionType": "R",
            "sessionDurationMinutes": 20
          }
    ]
}

export const eventRulesFields = {
    qualifyStandingType: 1,
    pitWindowLengthSec: -1,
    driverStintTimeSec: -1,
    mandatoryPitstopCount: 0,
    maxTotalDrivingTime: -1,
    maxDriversCount: 1,
    isRefuellingAllowedInRace: true,
    isRefuellingTimeFixed: false,
    isMandatoryPitstopRefuellingRequired: false,
    isMandatoryPitstopTyreChangeRequired: false,
    isMandatoryPitstopSwapDriverRequired: false,
    tyreSetCount: 50
}
