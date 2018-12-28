using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EncounterService.Migrations
{
    public partial class AddingTarray : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string[]>(
                name: "Tags",
                table: "Encounters",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Tags",
                table: "Encounters");
        }
    }
}
