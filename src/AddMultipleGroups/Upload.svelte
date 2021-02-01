<script lang="ts">
    import Dropzone from "svelte-file-dropzone"

    import Hoverable from "../Hoverable.svelte"
    import List, {Graphic, Item, Text} from "@smui/list"

    let files = {
        accepted: [],
        rejected: []
        
    };

    function handleFilesSelect(e) {
        const { acceptedFiles, fileRejections } = e.detail;
        
        files.accepted = [ ...acceptedFiles];
        files.rejected = [ ...fileRejections];
    }

    function onSelect(file)  {
        files.accepted = files.accepted.filter(f=>f!=file)
        files = files;
    }

    /**
     * Format bytes as human-readable text.
     * 
     * @param bytes Number of bytes.
     * @param si True to use metric (SI) units, aka powers of 1000. False to use 
     *           binary (IEC), aka powers of 1024.
     * @param dp Number of decimal places to display.
     * 
     * @return Formatted string.
     */
    function humanFileSize(bytes, si=false, dp=1) {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }

    const units = si 
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] 
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10**dp;

    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


    return bytes.toFixed(dp) + ' ' + units[u];
    }

</script>

<style>
    .uploadlist {
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 20px;

    }

    .file {
        border-style: solid;
        border-width: 1px;
        border-color: lightgrey;
        
    }

    .active {
        border-color: red;
        background-color: pink;
    }
</style>

<div class="uploadlist">
    <Dropzone on:drop={handleFilesSelect} accept=".csv" multiple="false"/>


    <List>
        {#each files.accepted as item}
            <Hoverable let:hovering={active}> 
                <div class="file" class:active>
                    {#if active}
                        <Item on:SMUI:action={() => onSelect(item)}>
                            <Graphic class="material-icons">delete</Graphic>
                            <Text>{item.name} {humanFileSize(item.size,false,2)}</Text>
                            <!-- {@debug item} -->
                        </Item>
                    {:else}
                        <Item>
                            <Graphic class="material-icons">upload_file</Graphic>
                            <Text>{item.name} {humanFileSize(item.size,false,2)}</Text>
                            <!-- {@debug item} -->
                        </Item>
                    {/if}
                </div>
            </Hoverable>
        {/each}
    </List>
</div>