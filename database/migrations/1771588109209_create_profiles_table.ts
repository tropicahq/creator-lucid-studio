import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
	protected tableName = "profiles";

	async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments("id");

			table
				.integer("user_id")
				.unsigned()
				.references("id")
				.inTable("users")
				.onDelete("CASCADE");

			table.jsonb("primary_niche").notNullable();
			table.jsonb("audience_segments").notNullable();
			table.string("main_goal").notNullable();
			table.string("social_bio").notNullable();

			table.timestamp("created_at");
			table.timestamp("updated_at");
		});
	}

	async down() {
		this.schema.dropTable(this.tableName);
	}
}
