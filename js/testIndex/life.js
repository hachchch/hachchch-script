public class life { 
        public static void live(String[] args) {
                //クラスのオブジェクトを生成
                eukaryota c = new eukaryota("Green Algae");
        
                //メンバ変数を参照する
                String str1 = c.name;
        
                //メソッドの呼出し
                String str2 = c.eukaryoticCell();
        
                //結果を出力
                System.out.println(str1 + str2);
        }
}
