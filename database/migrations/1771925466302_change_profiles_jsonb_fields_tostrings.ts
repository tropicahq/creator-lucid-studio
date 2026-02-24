import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
	protected tableName = "profiles";

	async up() {
		// this.schema.createTable(this.tableName, (table) => {
		//   table.increments('id')

		//   table.timestamp('created_at')
		//   table.timestamp('updated_at')
		// })
		this.schema.alterTable(this.tableName, (table) => {
			table.string("primary_niche").notNullable().alter();
			table.string("audience_segments").notNullable().alter();
		});
	}

	async down() {
		this.schema.alterTable(this.tableName, (table) => {
			// Revert the changes in the down method
			// The exact revert depends on the previous type and constraints
			table.jsonb("primary_niche").notNullable().alter();
			table.jsonb("audience_segments").notNullable().alter();
		});
	}
}
