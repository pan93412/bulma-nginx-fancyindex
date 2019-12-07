# bulma-nginx-fancyindex
## Usage
1. Add this theme to your `[server root]/index` directory 
2. Add the below line to your nginx configuation:

    ```nginx
    fancyindex on;              # Enable fancy indexes.
    fancyindex_header /index/header.html;
    fancyindex_footer /index/footer.html;
    ```

3. Restart your nginx server.

## Screenshot
![Screenshot 1](https://raw.githubusercontent.com/pan93412/bulma-nginx-fancyindex/master/img/screenshot-1.png)

## Authors
- [pan93412](https://www.github.com/pan93412), 2019.
