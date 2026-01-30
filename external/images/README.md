# Images Directory

This directory contains images for the PreTeXt book.

## Organization

Images should be organized by chapter:
- `ch_intro_to_data/` - Images for Chapter 1
- `ch_summarizing_data/` - Images for Chapter 2
- `ch_probability/` - Images for Chapter 3
- `ch_distributions/` - Images for Chapter 4
- `ch_foundations_for_inf/` - Images for Chapter 5
- `ch_inference_for_props/` - Images for Chapter 6
- `ch_inference_for_means/` - Images for Chapter 7
- `ch_regr_simple_linear/` - Images for Chapter 8
- `ch_regr_mult_and_log/` - Images for Chapter 9

## Converting Images

The original LaTeX figures need to be converted to formats suitable for PreTeXt:
- PNG or SVG for diagrams and plots
- PDF figures should be converted to PNG or SVG
- R-generated figures can be regenerated as PNG/SVG

## Image References

In PreTeXt, images are referenced using:
```xml
<image source="images/ch_intro_to_data/figure_name.png" width="70%">
  <description>Accessible description of the image</description>
</image>
```

You can copy the existing figures from the chapter folders into this directory structure.
