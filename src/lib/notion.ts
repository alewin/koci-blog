import { Client } from "@notionhq/client";

export type ScubaLog = {
    date: Date;
    description: string;
    lat: number;
    lng: number;
};

export async function getScubaLogbook(): Promise<ScubaLog[]> {
    const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });

    const pages = await notion.databases.query({
        database_id: import.meta.env.NOTION_DATABASE_ID,
    });


    return pages.results.map((page) => {
        // @ts-expect-error fix me
        const { date, location, lat, lng } = page.properties;

        if (!date || !location || !lat || !lng) return undefined;

        return {
            // date: new Date(page.properties.Date.title[0]?.plain_text),
            // @ts-expect-error fix me
            lat: page.properties.lat.number,
            // @ts-expect-error fix me
            lng: page.properties.lng.number,
            // @ts-expect-error fix me
            description: page.properties.location.rich_text[0]?.plain_text
        };
    }).filter((page) => page !== undefined) as ScubaLog[];

}