# OpenIntro Statistics - PreTeXt Edition

This repository contains the PreTeXt source files for the OpenIntro Statistics textbook. PreTeXt is a markup language for scholarly documents that allows generation of multiple output formats (HTML, PDF, etc.) from a single source.

## Folder Structure

- `source/` - PreTeXt source files (.ptx files) containing the textbook content
  - `main.ptx` - Main book file with frontmatter, chapter includes, and backmatter
  - `ch*.ptx` - Chapter content files (ch01.ptx through ch09.ptx)
  - `appendix-solutions.ptx` - Exercise solutions appendix (Appendix A, backmatter)
  - `appendix-data.ptx` - Data sets appendix (Appendix B, backmatter)
  - `appendix-tables.ptx` - Statistical distribution tables appendix (Appendix C, backmatter)
- `publication/` - PreTeXt publication configuration files
- `latex/` - Legacy LaTeX source files and chapter content
  - `ch_*/` - Chapter folders with LaTeX sections
  - `extraTeX/` - Additional LaTeX resources including data descriptions, tables, and solutions
  - `main.tex`, `eoce.bib`, `fullminipage.sty` - LaTeX source files
- `scripts/` - Python conversion scripts for LaTeX to PreTeXt conversion
- `project.ptx` - PreTeXt project configuration file
- `openintro-statistics.Rproj` - R project file

## Building the Book

This project uses PreTeXt to generate HTML and PDF output. The build system is configured in `project.ptx`.

### HTML Output

To build the HTML version:

```bash
pretext build web
```

The HTML output is generated to the `output/html/` directory (which is gitignored).

### PDF Output

To build the PDF version:

```bash
pretext build pdf
```

The PDF output is generated to the `output/pdf/` directory (which is gitignored).

## Published Site

The HTML version of the book is published via GitHub Pages on the `gh-pages` branch:

🔗 [View the published book](https://lilyclements.github.io/openintro-statistics/)

Note: Build artifacts (HTML files, output directories, logs) are excluded from version control via `.gitignore`.

## Contributing

When working on this project:
- Edit source files in the `source/` directory
- Build artifacts are automatically generated and should not be committed
- The `gh-pages` branch contains the deployed HTML output

## License

This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/4.0/.
