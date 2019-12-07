# bulma-nginx-fancyindex
## Usage
1. Add this theme to your `[server root]/index` directory 
2. Add the below line to your nginx configuation:

    fancyindex on;              # Enable fancy indexes.
    fancyindex_header /index/header.html;
    fancyindex_footer /index/footer.html;

3. Restart your nginx server.

## Screenshot

## Authors
- [pan93412](https://www.github.com/pan93412), 2019.
