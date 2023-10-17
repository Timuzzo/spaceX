export interface Launch {
    fairings: Fairings
    links: Links
    static_fire_date_utc: string
    static_fire_date_unix: number
    net: boolean
    window: number
    rocket: string
    success: boolean
    failures: Failure[]
    details: string
    crew: any[]
    ships: any[]
    capsules: any[]
    payloads: string[]
    launchpad: string
    flight_number: number
    name: string
    date_utc: string
    date_unix: number
    date_local: string
    date_precision: string
    upcoming: boolean
    cores: Core[]
    auto_update: boolean
    tbd: boolean
    launch_library_id: any
    id: string
}

export interface Fairings {
reused: boolean
recovery_attempt: boolean
recovered: boolean
ships: any[]
}

export interface Links {
patch: Patch
reddit: Reddit
flickr: Flickr
presskit: any
webcast: string
youtube_id: string
article: string
wikipedia: string
}

export interface Patch {
small: string
large: string
}

export interface Reddit {
campaign: any
launch: any
media: any
recovery: any
}

export interface Flickr {
small: any[]
original: any[]
}

export interface Failure {
time: number
altitude: any
reason: string
}

export interface Core {
core: string
flight: number
gridfins: boolean
legs: boolean
reused: boolean
landing_attempt: boolean
landing_success: any
landing_type: any
landpad: any
}