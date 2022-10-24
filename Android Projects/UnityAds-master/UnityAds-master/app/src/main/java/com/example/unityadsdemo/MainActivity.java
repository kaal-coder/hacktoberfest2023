package com.example.unityadsdemo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Toast;

import com.unity3d.ads.IUnityAdsListener;
import com.unity3d.ads.UnityAds;
import com.unity3d.services.banners.IUnityBannerListener;
import com.unity3d.services.banners.UnityBanners;

public class MainActivity extends AppCompatActivity  {

    private String GameID = "4147749";
    private String bannerPlacement = "Banner_Android";
    private String interPlacement = "Interstitial_Android";
    private String rewardedPlacement="Rewarded_Ad";
    private boolean testMode = true;
    Button banner, interstitial,rewarded;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        banner = findViewById(R.id.banner);
        interstitial = findViewById(R.id.interstitial);
        rewarded=findViewById(R.id.rewarded);


        UnityAds.initialize(this, GameID, testMode);
        IUnityBannerListener bannerListener = new IUnityBannerListener() {
            @Override
            public void onUnityBannerLoaded(String s, View view) {
                ((ViewGroup) findViewById(R.id.banner_ad)).removeView(view);
                ((ViewGroup) findViewById(R.id.banner_ad)).addView(view);
            }

            @Override
            public void onUnityBannerUnloaded(String s) {

            }

            @Override
            public void onUnityBannerShow(String s) {

            }

            @Override
            public void onUnityBannerClick(String s) {

            }

            @Override
            public void onUnityBannerHide(String s) {

            }

            @Override
            public void onUnityBannerError(String s) {

            }
        };
        UnityBanners.setBannerListener(bannerListener);
        IUnityAdsListener interListner = new IUnityAdsListener() {
            @Override
            public void onUnityAdsReady(String s) {

            }

            @Override
            public void onUnityAdsStart(String s) {

            }

            @Override
            public void onUnityAdsFinish(String s, UnityAds.FinishState finishState) {

            }

            @Override
            public void onUnityAdsError(UnityAds.UnityAdsError unityAdsError, String s) {

            }
        };
        UnityAds.setListener(interListner);
        UnityAds.load(interPlacement);

        IUnityAdsListener rewardedListner = new IUnityAdsListener() {
            @Override
            public void onUnityAdsReady(String s) {

            }

            @Override
            public void onUnityAdsStart(String s) {

            }

            @Override
            public void onUnityAdsFinish(String s, UnityAds.FinishState finishState) {
                // Implement conditional logic for each ad completion status:
                if (finishState.equals(UnityAds.FinishState.COMPLETED)) {
                    // Reward the user for watching the ad to completion.
                    Toast.makeText(MainActivity.this,"Completed",Toast.LENGTH_SHORT).show();

                } else if (finishState == UnityAds.FinishState.SKIPPED) {
                    // Do not reward the user for skipping the ad.
                    Toast.makeText(MainActivity.this,"Skipped",Toast.LENGTH_SHORT).show();
                } else if (finishState == UnityAds.FinishState.ERROR) {
                    // Log an error.
                    Toast.makeText(MainActivity.this,"Error",Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onUnityAdsError(UnityAds.UnityAdsError unityAdsError, String s) {
                Toast.makeText(MainActivity.this,"Error "+unityAdsError,Toast.LENGTH_SHORT).show();
            }
        };
        UnityAds.setListener(rewardedListner);
        UnityAds.load(interPlacement);

        banner.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                UnityBanners.loadBanner(MainActivity.this, bannerPlacement);
            }
        });

        interstitial.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (UnityAds.isReady(interPlacement)) {
                    UnityAds.show(MainActivity.this, interPlacement);
                }
            }
        });

        rewarded.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (UnityAds.isReady(rewardedPlacement)) {
                    UnityAds.show(MainActivity.this, rewardedPlacement);
                }
            }
        });


    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        UnityBanners.destroy();
    }
}